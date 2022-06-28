import React from "react";
import { useEth } from "../../contexts/EthContext";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const state = useEth();

  console.log(state);

  return (
    <div>
      <h1>Hello Web3!</h1>
      <h3>{state?.accounts![0]}</h3>
    </div>
  );
};

export default Home;
