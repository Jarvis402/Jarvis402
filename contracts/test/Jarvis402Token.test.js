const { expect } = require("chai");
const { ethers } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Jarvis402Token", function () {
  async function deployTokenFixture() {
    const [owner, user1, user2, distributor, other] = await ethers.getSigners();

    const Jarvis402Token = await ethers.getContractFactory("Jarvis402Token");
    const token = await Jarvis402Token.deploy();

    return { token, owner, user1, user2, distributor, other };
  }

  describe("Deployment", function () {
    it("Should set the right token name and symbol", async function () {
      const { token } = await loadFixture(deployTokenFixture);
      expect(await token.name()).to.equal("Jarvis402");
      expect(await token.symbol()).to.equal("J402");
    });

    it("Should mint initial supply to owner", async function () {
      const { token, owner } = await loadFixture(deployTokenFixture);
      const initialSupply = ethers.parseEther("100000000"); // 100M
      expect(await token.balanceOf(owner.address)).to.equal(initialSupply);
    });

    it("Should set correct max supply", async function () {
      const { token } = await loadFixture(deployTokenFixture);
      const maxSupply = ethers.parseEther("1000000000"); // 1B
      expect(await token.MAX_SUPPLY()).to.equal(maxSupply);
    });

    it("Should set the right owner", async function () {
      const { token, owner } = await loadFixture(deployTokenFixture);
      expect(await token.owner()).to.equal(owner.address);
    });
  });

  describe("Minting", function () {
    it("Should allow owner to mint tokens", async function () {
      const { token, owner, user1 } = await loadFixture(deployTokenFixture);

      const mintAmount = ethers.parseEther("1000");
      await token.connect(owner).mint(user1.address, mintAmount);

      expect(await token.balanceOf(user1.address)).to.equal(mintAmount);
    });

    it("Should not allow minting beyond max supply", async function () {
      const { token, owner, user1 } = await loadFixture(deployTokenFixture);

      const maxSupply = await token.MAX_SUPPLY();
      const currentSupply = await token.totalSupply();
      const excessAmount = maxSupply - currentSupply + ethers.parseEther("1");

      await expect(
        token.connect(owner).mint(user1.address, excessAmount)
      ).to.be.revertedWith("Exceeds max supply");
    });

    it("Should not allow non-owner to mint", async function () {
      const { token, user1, user2 } = await loadFixture(deployTokenFixture);

      await expect(
        token.connect(user1).mint(user2.address, ethers.parseEther("1000"))
      ).to.be.revertedWithCustomError(token, "OwnableUnauthorizedAccount");
    });
  });

  describe("Burning", function () {
    it("Should allow burning tokens", async function () {
      const { token, owner } = await loadFixture(deployTokenFixture);

      const burnAmount = ethers.parseEther("1000");
      const balanceBefore = await token.balanceOf(owner.address);

      await token.connect(owner).burn(burnAmount);

      expect(await token.balanceOf(owner.address)).to.equal(balanceBefore - burnAmount);
    });

    it("Should reduce total supply when burning", async function () {
      const { token, owner } = await loadFixture(deployTokenFixture);

      const burnAmount = ethers.parseEther("1000");
      const supplyBefore = await token.totalSupply();

      await token.connect(owner).burn(burnAmount);

      expect(await token.totalSupply()).to.equal(supplyBefore - burnAmount);
    });
  });

  describe("Reward Distributors", function () {
    it("Should allow owner to add reward distributor", async function () {
      const { token, owner, distributor } = await loadFixture(deployTokenFixture);

      await expect(token.connect(owner).addRewardDistributor(distributor.address))
        .to.emit(token, "RewardDistributorAdded")
        .withArgs(distributor.address);

      expect(await token.rewardDistributors(distributor.address)).to.be.true;
    });

    it("Should allow owner to remove reward distributor", async function () {
      const { token, owner, distributor } = await loadFixture(deployTokenFixture);

      await token.connect(owner).addRewardDistributor(distributor.address);

      await expect(token.connect(owner).removeRewardDistributor(distributor.address))
        .to.emit(token, "RewardDistributorRemoved")
        .withArgs(distributor.address);

      expect(await token.rewardDistributors(distributor.address)).to.be.false;
    });

    it("Should not allow non-owner to add distributor", async function () {
      const { token, user1, distributor } = await loadFixture(deployTokenFixture);

      await expect(
        token.connect(user1).addRewardDistributor(distributor.address)
      ).to.be.revertedWithCustomError(token, "OwnableUnauthorizedAccount");
    });
  });

  describe("Reward Distribution", function () {
    it("Should allow authorized distributor to distribute rewards", async function () {
      const { token, owner, distributor, user1 } = await loadFixture(deployTokenFixture);

      await token.connect(owner).addRewardDistributor(distributor.address);

      const rewardAmount = ethers.parseEther("50");
      const reason = "Early adopter bonus";

      await expect(
        token.connect(distributor).distributeReward(user1.address, rewardAmount, reason)
      ).to.emit(token, "RewardDistributed")
        .withArgs(user1.address, rewardAmount, reason);

      expect(await token.balanceOf(user1.address)).to.equal(rewardAmount);
      expect(await token.totalRewardsEarned(user1.address)).to.equal(rewardAmount);
    });

    it("Should allow owner to distribute rewards", async function () {
      const { token, owner, user1 } = await loadFixture(deployTokenFixture);

      const rewardAmount = ethers.parseEther("100");
      await token.connect(owner).distributeReward(user1.address, rewardAmount, "Owner reward");

      expect(await token.balanceOf(user1.address)).to.equal(rewardAmount);
    });

    it("Should not allow unauthorized to distribute rewards", async function () {
      const { token, user1, user2 } = await loadFixture(deployTokenFixture);

      await expect(
        token.connect(user1).distributeReward(user2.address, ethers.parseEther("50"), "Unauthorized")
      ).to.be.revertedWith("Not authorized to distribute rewards");
    });

    it("Should track total rewards earned", async function () {
      const { token, owner, distributor, user1 } = await loadFixture(deployTokenFixture);

      await token.connect(owner).addRewardDistributor(distributor.address);

      await token.connect(distributor).distributeReward(user1.address, ethers.parseEther("10"), "Reward 1");
      await token.connect(distributor).distributeReward(user1.address, ethers.parseEther("20"), "Reward 2");
      await token.connect(distributor).distributeReward(user1.address, ethers.parseEther("30"), "Reward 3");

      expect(await token.totalRewardsEarned(user1.address)).to.equal(ethers.parseEther("60"));
    });

    it("Should not distribute rewards beyond max supply", async function () {
      const { token, owner, user1 } = await loadFixture(deployTokenFixture);

      const maxSupply = await token.MAX_SUPPLY();
      const currentSupply = await token.totalSupply();
      const excessAmount = maxSupply - currentSupply + ethers.parseEther("1");

      await expect(
        token.connect(owner).distributeReward(user1.address, excessAmount, "Too much")
      ).to.be.revertedWith("Exceeds max supply");
    });
  });

  describe("Service Provider Rewards", function () {
    it("Should reward service providers", async function () {
      const { token, owner, distributor, user1 } = await loadFixture(deployTokenFixture);

      await token.connect(owner).addRewardDistributor(distributor.address);

      const rewardAmount = await token.serviceProviderReward();

      await expect(
        token.connect(distributor).rewardServiceProvider(user1.address)
      ).to.emit(token, "RewardDistributed")
        .withArgs(user1.address, rewardAmount, "Service Registration");

      expect(await token.balanceOf(user1.address)).to.equal(rewardAmount);
    });

    it("Should not reward if exceeds max supply", async function () {
      const { token, owner, distributor, user1 } = await loadFixture(deployTokenFixture);

      await token.connect(owner).addRewardDistributor(distributor.address);

      // Mint close to max supply
      const maxSupply = await token.MAX_SUPPLY();
      const currentSupply = await token.totalSupply();
      const almostMax = maxSupply - currentSupply - ethers.parseEther("1");

      await token.connect(owner).mint(user1.address, almostMax);

      // Reward should not mint anything
      await token.connect(distributor).rewardServiceProvider(user1.address);

      // Balance should only be the minted amount
      expect(await token.balanceOf(user1.address)).to.equal(almostMax);
    });
  });

  describe("Payment Rewards", function () {
    it("Should reward payment completion", async function () {
      const { token, owner, distributor, user1 } = await loadFixture(deployTokenFixture);

      await token.connect(owner).addRewardDistributor(distributor.address);

      const rewardAmount = await token.paymentReward();

      await expect(
        token.connect(distributor).rewardPayment(user1.address)
      ).to.emit(token, "RewardDistributed")
        .withArgs(user1.address, rewardAmount, "Payment Completion");

      expect(await token.balanceOf(user1.address)).to.equal(rewardAmount);
    });
  });

  describe("Staking", function () {
    it("Should allow staking tokens", async function () {
      const { token, owner } = await loadFixture(deployTokenFixture);

      const stakeAmount = ethers.parseEther("1000");

      await expect(token.connect(owner).stake(stakeAmount))
        .to.emit(token, "Staked")
        .withArgs(owner.address, stakeAmount);

      expect(await token.stakedBalance(owner.address)).to.equal(stakeAmount);
    });

    it("Should reject staking with insufficient balance", async function () {
      const { token, user1 } = await loadFixture(deployTokenFixture);

      await expect(
        token.connect(user1).stake(ethers.parseEther("1000"))
      ).to.be.revertedWith("Insufficient balance");
    });

    it("Should reject staking zero amount", async function () {
      const { token, owner } = await loadFixture(deployTokenFixture);

      await expect(
        token.connect(owner).stake(0)
      ).to.be.revertedWith("Cannot stake 0");
    });

    it("Should allow unstaking tokens", async function () {
      const { token, owner } = await loadFixture(deployTokenFixture);

      const stakeAmount = ethers.parseEther("1000");
      await token.connect(owner).stake(stakeAmount);

      const balanceBefore = await token.balanceOf(owner.address);

      await expect(token.connect(owner).unstake(stakeAmount))
        .to.emit(token, "Unstaked")
        .withArgs(owner.address, stakeAmount);

      expect(await token.stakedBalance(owner.address)).to.equal(0);
      expect(await token.balanceOf(owner.address)).to.equal(balanceBefore + stakeAmount);
    });

    it("Should reject unstaking more than staked", async function () {
      const { token, owner } = await loadFixture(deployTokenFixture);

      const stakeAmount = ethers.parseEther("1000");
      await token.connect(owner).stake(stakeAmount);

      await expect(
        token.connect(owner).unstake(ethers.parseEther("2000"))
      ).to.be.revertedWith("Insufficient staked balance");
    });

    it("Should allow partial unstaking", async function () {
      const { token, owner } = await loadFixture(deployTokenFixture);

      const stakeAmount = ethers.parseEther("1000");
      await token.connect(owner).stake(stakeAmount);

      const unstakeAmount = ethers.parseEther("400");
      await token.connect(owner).unstake(unstakeAmount);

      expect(await token.stakedBalance(owner.address)).to.equal(stakeAmount - unstakeAmount);
    });
  });

  describe("Staking Info", function () {
    it("Should return correct staking info", async function () {
      const { token, owner, distributor, user1 } = await loadFixture(deployTokenFixture);

      // Transfer tokens to user1
      await token.connect(owner).transfer(user1.address, ethers.parseEther("10000"));

      // Stake tokens
      const stakeAmount = ethers.parseEther("5000");
      await token.connect(user1).stake(stakeAmount);

      // Give some rewards
      await token.connect(owner).addRewardDistributor(distributor.address);
      const rewardAmount = ethers.parseEther("100");
      await token.connect(distributor).distributeReward(user1.address, rewardAmount, "Test reward");

      const [staked, stakingTime, rewardsEarned] = await token.getStakingInfo(user1.address);

      expect(staked).to.equal(stakeAmount);
      expect(stakingTime).to.be.gt(0);
      expect(rewardsEarned).to.equal(rewardAmount);
    });
  });

  describe("Reward Configuration", function () {
    it("Should allow owner to update rewards", async function () {
      const { token, owner } = await loadFixture(deployTokenFixture);

      const newServiceReward = ethers.parseEther("200");
      const newPaymentReward = ethers.parseEther("5");

      await token.connect(owner).updateRewards(newServiceReward, newPaymentReward);

      expect(await token.serviceProviderReward()).to.equal(newServiceReward);
      expect(await token.paymentReward()).to.equal(newPaymentReward);
    });

    it("Should not allow non-owner to update rewards", async function () {
      const { token, user1 } = await loadFixture(deployTokenFixture);

      await expect(
        token.connect(user1).updateRewards(ethers.parseEther("1000"), ethers.parseEther("100"))
      ).to.be.revertedWithCustomError(token, "OwnableUnauthorizedAccount");
    });
  });

  describe("Token Transfer", function () {
    it("Should allow transferring tokens", async function () {
      const { token, owner, user1 } = await loadFixture(deployTokenFixture);

      const transferAmount = ethers.parseEther("1000");
      await token.connect(owner).transfer(user1.address, transferAmount);

      expect(await token.balanceOf(user1.address)).to.equal(transferAmount);
    });

    it("Should not transfer more than balance", async function () {
      const { token, user1, user2 } = await loadFixture(deployTokenFixture);

      await expect(
        token.connect(user1).transfer(user2.address, ethers.parseEther("1000"))
      ).to.be.reverted;
    });
  });
});
