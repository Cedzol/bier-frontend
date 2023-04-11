import React, { useState } from "react";
import { BeerType } from "../assets/BeerType";
import MainPage from "./pages/MainPage";
import { Box } from "@mui/material";

export function Brewmaster() {
  const [beerType, setBeerType]: any = useState(BeerType.Lager);
  const [showBeerSelection, setShowBeerSelection] = useState(true);

  function changeBeerType() {
    let select: any = document.getElementById("beerTypeSelect");
    console.log("beertype changed");
    setBeerType(select.value);
  }

  function startProccess() {
    setShowBeerSelection(false);
  }

  return (
    <div>
      <p>Selected Beer Type: {beerType}</p>
      {showBeerSelection ? (
        <div>
          <select id={"beerTypeSelect"} onChange={changeBeerType}>
            <option value={BeerType.Dunkel}>Dunkel</option>
            <option value={BeerType.Lager}>Lager</option>
            <option value={BeerType.Weizen}>Weizen</option>
          </select>
          <br></br>
          <button onClick={startProccess}>Start Prozesss</button>
        </div>
      ) : (
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            bgcolor: "#191919",
            overflow: "hidden",
          }}
        >
          <MainPage />
        </Box>
      )}
    </div>
  );
}
