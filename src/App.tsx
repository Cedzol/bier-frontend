import "./App.css";
import { Brewmaster } from "./components/Brewmaster";
import { createTheme, ThemeProvider } from "@mui/material";
import {useEffect} from "react";
import Service from "./Services/Service";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {

    useEffect(()=>{
        Service.startSudhaus("SudhausUndGaerkellerID")
    },[])

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Brewmaster />
      </ThemeProvider>
    </div>
  );
}

export default App;
