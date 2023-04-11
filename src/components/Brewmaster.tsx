import React, { useState } from "react";
import MainPage from "./pages/MainPage";
import { BeerType } from "../models/BeerType";
import {
  Box,
  Card,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputBase,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export function Brewmaster() {
  const [beerType, setBeerType]: any = useState(BeerType.LAGER);
  const [showBeerSelection, setShowBeerSelection] = useState(true);

  function changeBeerType(newSelected: SelectChangeEvent) {
    let select: any = newSelected.target.value;
    console.log("beertype changed");
    setBeerType(select);
  }

  function startProccess() {
    setShowBeerSelection(false);
  }

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: "#191919",
        overflow: "hidden",
      }}
    >
      {showBeerSelection ? (
        <div>
          <Card
            sx={{
              bgcolor: "#292929",
              float: "center",
              mt: 5,
              height: "50vh",
              width: "50vw",
              ml: "25vw",
              mr: "25vw",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#fff",
                ml: "5vw",
                mb: "2vh",
                mt: 5,
              }}
            >
              Wählen Sie die Art von Bier welche Sie brauen möchten!
            </Typography>
            <Box
              sx={{
                float: "center",
                mt: 10,
                width: "50%",
                ml: "25%",
                mr: "25%",
              }}
            >
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel id="demo-simple-select-label">
                  Bier-Sorte
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={beerType}
                  label="Bier-Sorte"
                  onChange={changeBeerType}
                >
                  <MenuItem value={BeerType.DUNKEL}>Dunkel</MenuItem>
                  <MenuItem value={BeerType.LAGER}>Lager</MenuItem>
                  <MenuItem value={BeerType.WEIZEN}>Weizen</MenuItem>
                </Select>
              </FormControl>
              <button
                onClick={startProccess}
                disabled={
                  beerType !== BeerType.DUNKEL &&
                  beerType !== BeerType.LAGER &&
                  beerType !== BeerType.WEIZEN
                }
              >
                Start Prozesss
              </button>
            </Box>
          </Card>
          <br></br>
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
          <MainPage selectedBeerType={beerType} />
        </Box>
      )}
    </Box>
  );
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    color: "#fff",
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    border: "1px solid #fff",
    fontSize: 16,
    transition: theme.transitions.create(["border-color"]),
    // Use the system font instead of the default Roboto font.
    "&:focus": {
      borderColor: "#fcca27",
    },
  },
}));
