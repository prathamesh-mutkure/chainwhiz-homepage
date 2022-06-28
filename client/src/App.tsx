import React from "react";
import { EthProvider } from "./contexts/EthContext";
import "./App.css";
import Home from "./components/Home/Home";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <EthProvider>
      <Home />
    </EthProvider>
  );
};

export default App;
