## Hop Legacy Coins

Use this library to resolve all metadata for the 471 first coins, launched on Hop Fun.

`npm install @hop.ag/legacy`

#### Load from JSON file
Recommended. All the Metadata is already frozen on-chain.

```typescript
import { LegacyCoinMetadata } from "@hop.ag/legacy";
import { CoinMetadata } from "@mysten/sui/client";

const coinType = "0x43e9045850072b10168c565ca7c57060a420015343023a49e87e6e47d3a74231::hoppy::HOPPY";
const coin_metadata: CoinMetadata = LegacyCoinMetadata[coinType];
```

#### Load from Chain Event

```typescript
import { getLegacyMetadata } from "@hop.ag/legacy";
import { CoinMetadata } from "@mysten/sui/client";

const coinType = "0x43e9045850072b10168c565ca7c57060a420015343023a49e87e6e47d3a74231::hoppy::HOPPY";
const coin_metadata: CoinMetadata = await getLegacyMetadata[coinType];
```

### Total Supply
Each of these coins has ```1,000,000,000``` total supply and ```6``` decimal places.

#### Why did this happen?
Sui RPC V1.0 does not pick up our frozen metadata for these coins. V2.0 will automatically
pick them up, however, for the time being, we recommend all of our partners to integrate
like this.