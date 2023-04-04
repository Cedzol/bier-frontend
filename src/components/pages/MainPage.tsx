import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import BierStepper from "../organisms/BierStepper";
import LagerDiagramm from "../organisms/LagerDiagramm";
import Typography from "@mui/material/Typography";
import { DiagrammType } from "../../models/DiagrammType";

export default function MainPage() {
  const [malzData, setMalzData] = useState<DiagrammType[]>([
    {
      name: "Weizen",

      value: 89,
    },
    {
      name: "Dunkel",

      value: 25,
    },
    {
      name: "Lager",

      value: 64,
    },
  ]);

  const [hopfenData, setHopfenData] = useState<DiagrammType[]>([
    {
      name: "Herkules",

      value: 73,
    },
    {
      name: "Cascade",

      value: 90,
    },
    {
      name: "Mosaik",

      value: 14,
    },
  ]);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: "#191919",
        overflow: "hidden",
      }}
    >
      <Grid container sx={{ height: "90vh" }}>
        <Grid item md={12}></Grid>
        <Grid item md={12} sx={{ height: "57vh" }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#fff",
              ml: "5vw",
              mb: "2vh",
            }}
          >
            Brau-Prozess:
          </Typography>
          <BierStepper />
        </Grid>
        <Grid item md={4} sx={{ height: "33vh" }}>
          <LagerDiagramm malzData={malzData} hopfenData={hopfenData} />
        </Grid>
      </Grid>
    </Box>
  );
}
