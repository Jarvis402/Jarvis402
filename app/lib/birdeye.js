/**
 * Birdeye API Integration
 * Fetches comprehensive token market data from Birdeye
 */

const BIRDEYE_API_BASE = 'https://public-api.birdeye.so';

/**
 * Fetches market data for a specific token from Birdeye
 * @param {string} contractAddress - The token contract address
 * @param {string} chain - The blockchain (defaults to 'solana')
 * @returns {Promise<Object>} Token market data
 */
export async function getBirdeyeTokenMarketData(contractAddress) {
  const apiKey = process.env.BIRDEYE_API_KEY;

  if (!apiKey) {
    throw new Error('BIRDEYE_API_KEY is not configured in environment variables');
  }

  try {
    const response = await fetch(
      `${BIRDEYE_API_BASE}/defi/v3/token/market-data?address=${contractAddress}`,
      {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'X-API-KEY': apiKey,
        },
      }
    );

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Birdeye API: Unauthorized - API key is missing or invalid');
      }
      if (response.status === 400) {
        throw new Error('Birdeye API: Bad Request - Invalid contract address or parameters');
      }
      throw new Error(`Birdeye API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error('Birdeye API returned unsuccessful response');
    }

    return data;
  } catch (error) {
    console.error('Error fetching Birdeye token data:', error);
    throw error;
  }
}

/**
 * Formats Birdeye token data into a human-readable summary for AI context
 * @param {Object} birdeyeData - Raw Birdeye API response
 * @returns {string} Formatted token data summary
 */
export function formatBirdeyeDataForAI(birdeyeData) {
  if (!birdeyeData || !birdeyeData.success || !birdeyeData.data) {
    return 'No market data available.';
  }

  const data = birdeyeData.data;

  const summary = [
    '=== TOKEN MARKET DATA ===',
    '',
    `Contract Address: ${data.address || 'N/A'}`,
    `Price (USD): $${data.price ? Number(data.price).toFixed(8) : 'N/A'}`,
    `Liquidity: $${data.liquidity ? Number(data.liquidity).toLocaleString() : 'N/A'}`,
    `Market Cap: $${data.market_cap ? Number(data.market_cap).toLocaleString() : 'N/A'}`,
    '',
    '--- Trading Metrics ---',
    `FDV (Fully Diluted Valuation): $${data.fdv ? Number(data.fdv).toLocaleString() : 'N/A'}`,
    '',
    '--- Supply Information ---',
    `Circulating Supply: ${data.circulating_supply ? Number(data.circulating_supply).toLocaleString() : 'N/A'}`,
    `Total Supply: ${data.total_supply ? Number(data.total_supply).toLocaleString() : 'N/A'}`,
    '',
    '--- Token Metrics ---',
    `Is Scaled UI Amount: ${data.is_scaled_ui_token !== undefined ? data.is_scaled_ui_token : 'N/A'}`,
    `Multiplier: ${data.multiplier !== undefined ? data.multiplier : 'N/A'}`,
    '',
    '================================',
  ];

  return summary.join('\n');
}

/**
 * Validates if a string is a valid Solana contract address
 * @param {string} address - The address to validate
 * @returns {boolean} True if valid Solana address format
 */
export function isValidSolanaAddress(address) {
  // Solana addresses are base58 encoded and typically 32-44 characters
  const solanaAddressRegex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
  return solanaAddressRegex.test(address);
}

/**
 * Extracts contract address from user message
 * Supports formats like:
 * - [Contract Address: ABC...]
 * - Contract: ABC...
 * - Address: ABC...
 * - Raw address
 * @param {string} message - User message
 * @returns {string|null} Extracted contract address or null
 */
export function extractContractAddress(message) {
  // Pattern 1: [Contract Address: ABC...]
  const pattern1 = /\[Contract Address:\s*([0-9A-HJ-NP-Za-km-z]{32,44})\]/i;
  const match1 = message.match(pattern1);
  if (match1) return match1[1];

  // Pattern 2: Contract: ABC... or Address: ABC...
  const pattern2 = /(?:Contract|Address):\s*([0-9A-HJ-NP-Za-km-z]{32,44})/i;
  const match2 = message.match(pattern2);
  if (match2) return match2[1];

  // Pattern 3: Standalone valid Solana address
  const words = message.split(/\s+/);
  for (const word of words) {
    if (isValidSolanaAddress(word)) {
      return word;
    }
  }

  return null;
}
