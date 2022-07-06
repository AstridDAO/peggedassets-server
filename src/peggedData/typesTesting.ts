type PegType = "peggedUSD" | "peggedVAR";
type PegMechanism = "algorithmic" | "fiat-backed" | "crypto-backed";
export type PriceSource = "chainlink" | "uniswap" | "dexscreener" | "curve" | "coingecko" | "birdeye";

export type PeggedAsset = {
  id: string;
  name: string;
  address: string;
  symbol: string;
  url: string;
  description: string;
  mintRedeemDescription: string;
  onCoinGecko: string;
  gecko_id: string;
  cmcId: string;
  pegType: PegType;
  pegMechanism: PegMechanism;
  priceSource: PriceSource;
  auditLinks: string[];
  twitter: string;
  wiki: string;
};

type Bridge = {
  name: string;
  link?: string;
};

export type BridgeInfo = {
  [bridgeID: string]: Bridge;
};
