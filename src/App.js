import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import { ThemeProvider } from "@material-ui/core/styles";

import Home from "./pages/Home";

import darkTheme from "./util/themes";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
