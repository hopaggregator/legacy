import { SuiClient, getFullnodeUrl } from "@mysten/sui/client";
import { LegacyCoinTypes, getLegacyMetadata } from "../index";

async function resolveTest() {
  const sui_client = new SuiClient({
    url: getFullnodeUrl('mainnet')
  });
  const metadata_map = {};

  for(let i = 0; i < LegacyCoinTypes.length; i++) {
    const coinType = LegacyCoinTypes[i];
    metadata_map[coinType] = await getLegacyMetadata(sui_client, coinType);
  }

  console.log(JSON.stringify(metadata_map, null, 2));
}

resolveTest()