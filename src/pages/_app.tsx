import * as React from "react";
import { AppProps } from "next/app";
import { globalStyles } from "../stitches.config";
import { ThemeProvider } from "../components/theme";

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
