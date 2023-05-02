import "./App.css";
import { Brewmaster } from "./components/Brewmaster";
import {Button, createTheme, ThemeProvider} from "@mui/material";
import {useEffect, useState} from "react";
import Service from "./Services/Service";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Brewmaster />
      </ThemeProvider>
    </div>
  );
}

export default App;
