import { createContext } from "react";
import Web3 from "web3";

export interface EthContextType {
  artifact: any | null;
  web3: Web3 | null;
  accounts: string[] | null;
  networkID: number | null;
  contract: any | null;
}

const EthContext = createContext<EthContextType | null>(null);

export default EthContext;
