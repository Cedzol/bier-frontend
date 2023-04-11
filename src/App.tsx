import "./App.css";
import { Brewmaster } from "./components/Brewmaster";
import { createTheme, ThemeProvider } from "@mui/material";
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
