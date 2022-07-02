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
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0e0e0e",
        // main: "#ff0000",
      },
      secondary: {
        main: "#d4ff1e",
      },
    },
    typography: {
      fontFamily: ["Poppins", "Roboto", "Arial"].join(","),
      h1: {
        color: "primary.main",
      },
    },
    components: {},
  });

  return (
    <EthProvider>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </EthProvider>
  );
};

export default App;
