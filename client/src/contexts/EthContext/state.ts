import { EthContextType } from "./EthContext";

// TODO: Replace with Slice
// Currently not implemented Redux

const actions = {
  init: "INIT",
};

const initialState = {
  artifact: null,
  web3: null,
  accounts: null,
  networkID: null,
  contract: null,
} as EthContextType;

const reducer = (state: any, action: any) => {
  const { type, data } = action;

  switch (type) {
    case actions.init:
      return { ...state, ...data };
    default:
      throw new Error("Undefined reducer action type");
  }
};

export { actions, initialState, reducer };
