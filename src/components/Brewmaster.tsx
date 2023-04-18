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
  Button,
  SelectChangeEvent,
} from "@mui/material";
import Typography from "@mui/material/Typography";

export function Brewmaster() {
  const [beerType, setBeerType]: any = useState(BeerType.LAGER);
  const [showBeerSelection, setShowBeerSelection] = useState(true);

  function changeBeerType(newSelected: SelectChangeEvent) {
    let select: any = newSelected.target.value;
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
              <Button
                onClick={startProccess}
                disabled={
                  beerType !== BeerType.DUNKEL &&
                  beerType !== BeerType.LAGER &&
                  beerType !== BeerType.WEIZEN
                }
                sx={{
                  bgcolor: "#6dad53",
                  color: "#fff",
                  width: "75%",
                  ml: "12.5%",
                  mr: "12.5%",
                }}
              >
                Start Prozesss
              </Button>
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
