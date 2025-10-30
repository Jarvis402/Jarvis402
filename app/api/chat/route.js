import { google } from '@ai-sdk/google';
import { streamText, convertToModelMessages } from 'ai';
import {
  getBirdeyeTokenMarketData,
  formatBirdeyeDataForAI,
  extractContractAddress
} from '@/app/lib/birdeye';

// Allow streaming responses up to 50 seconds
export const maxDuration = 120;

export async function POST(req) {
  const { messages } = await req.json();

  // Extract contract address from the latest user message
  let birdeyeContext = '';
  if (messages.length > 0) {
    const latestMessage = messages[messages.length - 1];
    if (latestMessage.role === 'user') {
      const contractAddress = extractContractAddress(latestMessage.parts[0].text);
      console.log(contractAddress)
      if (contractAddress) {
        try {
          console.log(`Fetching market data for contract: ${contractAddress}`);
          const birdeyeData = await getBirdeyeTokenMarketData(contractAddress);
          birdeyeContext = formatBirdeyeDataForAI(birdeyeData);
          console.log('Market data fetched successfully: ', birdeyeData);
        } catch (error) {
          console.error('Error fetching market data:', error.message);
          // Continue without market data if it fails
          birdeyeContext = `Note: Unable to fetch market data for this token. Error: ${error.message}`;
        }
      }
    }
  }

  // System prompt loaded from environment variable for security
  const systemPrompt = process.env.JARVIS_SYSTEM_PROMPT;

  const result = streamText({
    model: google('gemini-2.5-flash'),
    tools: {
      google_search: google.tools.googleSearch({}),
      url_context: google.tools.urlContext({})
    },
    system: systemPrompt,
    messages: convertToModelMessages(messages),
    temperature: 0.7,
    maxTokens: 4000,
  });

  return result.toUIMessageStreamResponse();
}
