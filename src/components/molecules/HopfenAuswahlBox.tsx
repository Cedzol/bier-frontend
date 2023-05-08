import React, { useState } from "react";
import { HopfenType } from "../../models/HopfenType";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { BeerType } from "../../models/BeerType";
import StepperBoxTitle from "../atoms/StepperBoxTitle";
import Service from "../../Services/Service";

/**
 * @Step 4
 *
 * @Tasks:
 * 1.) Hopfenauswahl
 */

type HopfenAuswahlBoxProps = {
  setNextStep: Function;
  saveSelectedHopfen: Function;
};

export default function HopfenAuswahlBox({
  setNextStep,
  saveSelectedHopfen,
}: HopfenAuswahlBoxProps) {
  const [selectedHopfen, setSelectedHopfen]: any = useState(HopfenType.CASCADE);
  const [showBeerSelection, setShowBeerSelection] = useState(true);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [hopType, setHopType]: any = useState(HopfenType.CASCADE);

  const changeHopfenType = (newSelected: SelectChangeEvent) => {
    let select: any = newSelected.target.value;
    setHopType(select)
    setSelectedHopfen(select);
  };

  const handleSaveSelectedHopfenType = () => {
    if (!isRunning) {
      Service.getValue("SudhausUndGaerkellerID").then((res:any) => {
        return Service.completeHopTypeTask(res.data[0].id,hopType.toString()).then(() => {
          Service.getValue("BestandskontrolleID").then((lager:any) => {
            return Service.completeStorageTask(lager.data[0].id, "Voll").then(() => {
              Service.getValue("SudhausUndGaerkellerID").then((typ:any) => {
                return Service.completePath(typ.data[0].id,"Hopfen")
              })
            })
          });})
    })}
    setIsRunning(true);
    saveSelectedHopfen(selectedHopfen);
    setNextStep();
  };

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={12} lg={12} sx={{ textAlign: "center", pb: 5 }}>
          <StepperBoxTitle title="Hopfen-Auswahl:" />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Box
            sx={{
              float: "center",
              mt: 5,
              width: "50%",
              ml: "25%",
              mr: "25%",
            }}
          >
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel id="demo-simple-select-label">
                Hopfen-Sorte
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedHopfen}
                label="Bier-Sorte"
                onChange={changeHopfenType}
              >
                <MenuItem value={HopfenType.CASCADE}>Cascade</MenuItem>
                <MenuItem value={HopfenType.MOSAIK}>Mosaik</MenuItem>
                <MenuItem value={HopfenType.HERKULES}>Herkules</MenuItem>
              </Select>
            </FormControl>
            <Button
              onClick={handleSaveSelectedHopfenType}
              disabled={
                selectedHopfen !== HopfenType.CASCADE &&
                selectedHopfen !== HopfenType.MOSAIK &&
                selectedHopfen !== HopfenType.HERKULES
              }
              sx={{
                bgcolor: "#6dad53",
                color: "#fff",
                width: "75%",
                ml: "12.5%",
                mr: "12.5%",
              }}
            >
              Hopfen speichern
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
