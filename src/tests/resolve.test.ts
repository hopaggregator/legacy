import { SuiClient, getFullnodeUrl } from "@mysten/sui/client";
import { LegacyCoinTypes, getLegacyMetadata } from "../index";

async function resolveTest() {
  const sui_client = new SuiClient({
    url: getFullnodeUrl('mainnet')
  });
  const metadata_map = {};

  for(let i = 0; i < LegacyCoinTypes.length; i++) {
    const coinType = LegacyCoinTypes[i];
    const result = await getLegacyMetadata(sui_client, coinType);
    metadata_map[coinType] = {
      ticker: result.symbol,
      name: result.name,
      icon: result.iconUrl,
      address: coinType,
      verified: true,
      decimals: 6
    };
  }

  console.log(JSON.stringify(metadata_map, null, 2));
}

resolveTest()