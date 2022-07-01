import React, { useState, useCallback, useEffect } from "react";
import { ReactNode } from "react";
import Web3 from "web3";
import EthContext, { EthContextType } from "./EthContext";
import { initialState } from "./state";

interface EthProviderProps {
  children?: ReactNode;
}

const EthProvider: React.FC<EthProviderProps> = ({ children }) => {
  const [state, setState] = useState<EthContextType>(initialState);

  const init = useCallback(async (artifact: any) => {
    if (artifact) {
      const web3: Web3 = new Web3(
        Web3.givenProvider || "http://localhost:8545"
      );
      const accounts: string[] = await web3.eth.requestAccounts();
      const networkID: number = await web3.eth.net.getId();
      const { abi } = artifact;
      let address, contract;

      try {
        console.log("Hehe");

        address = artifact.networks[networkID].address;
        contract = new web3.eth.Contract(abi, address);
      } catch (err) {
        console.error(err);
      }

      setState({
        web3,
        artifact,
        accounts,
        contract,
        networkID,
      });
    }
  }, []);

  useEffect(() => {
    const tryInit = async () => {
      try {
        const artifact = require("../../contracts/SimpleStorage.json");
        init(artifact);
      } catch (err) {
        console.error("Error connecting: ", err);
      }
    };

    tryInit();
  }, [init]);

  useEffect(() => {
    const events = ["chainChanged", "accountsChanged"];
    const handleChange = () => {
      init(state.artifact);
    };

    events.forEach((e) => (window as any).ethereum?.on(e, handleChange));

    return () => {
      events.forEach((e) =>
        (window as any).ethereum?.removeListener(e, handleChange)
      );
    };
  }, [init, state.artifact]);

  return <EthContext.Provider value={state}>{children}</EthContext.Provider>;
};

export default EthProvider;
