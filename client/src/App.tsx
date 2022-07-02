import React from "react";
import Home from "./components/Home/Home";
import { EthProvider } from "./contexts/EthContext";
import { createTheme, ThemeProvider } from "@mui/material";

// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const theme = createTheme();

  return (
    <EthProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </EthProvider>
  );
};

export default App;
