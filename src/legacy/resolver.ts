import { CoinMetadata, SuiClient } from "@mysten/sui/client";
import { BONDING_CURVE_CREATED_EVENT } from "./constants.js";

export async function getLegacyMetadata(sui_client: SuiClient, coinType: string): Promise<CoinMetadata | undefined> {
  const result = await sui_client.queryEvents({
    query: {
      MoveEventType: `${BONDING_CURVE_CREATED_EVENT}<${coinType}>`
    }
  });

  if(result.data.length === 1) {
    // @ts-ignore
    const event = result.data[0].parsedJson;

    return {
      // @ts-ignore
      name: event?.coin_name,
      // @ts-ignore
      symbol: event?.ticker,
      // @ts-ignore
      description: event?.description,
      // @ts-ignore
      iconUrl: event?.image_url,
      decimals: 6,
    }
  }

  return undefined;
}