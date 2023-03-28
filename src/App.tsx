import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./routes/Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
