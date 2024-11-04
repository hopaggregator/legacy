// @ts-ignore
import type { CoinMetadata } from "@mysten/sui";

import legacyCoinTypesData from "./legacy/data/legacy_coin_types.json" assert { type: "json" };
import legacyCoinMetadataData from "./legacy/data/legacy_coin_metadata.json" assert { type: "json" };

export { getLegacyMetadata } from "./legacy/resolver.js";

// Assign types to the JSON imports
export const LegacyCoinTypes = legacyCoinTypesData as string[];
export const LegacyCoinMetadata = legacyCoinMetadataData as Record<string, CoinMetadata>;