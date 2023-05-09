import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import BierStepper from "../organisms/BierStepper";
import LagerDiagramm from "../organisms/LagerDiagramm";
import { DiagrammType } from "../../models/DiagrammType";
import { BeerType } from "../../models/BeerType";
import AppHeader from "../atoms/AppHeader";
import { HopfenType } from "../../models/HopfenType";
import RezeptNoteBox from "../atoms/RezeptNoteBox";

type MainPageProcessProps = {
  selectedBeerType: BeerType | any | string;
};

export default function MainPage({ selectedBeerType }: MainPageProcessProps) {
  const [hopfen, setHopfen] = useState<HopfenType | string>("");
  const [malzData, setMalzData] = useState<DiagrammType[]>([
    {
      name: "Weizen",

      value: 89,
    },
    {
      name: "Dunkel",

      value: 75,
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

      value: 44,
    },
  ]);

  useEffect(() => {
    if (hopfen === HopfenType.CASCADE) {
      setHopfenData([
        {
          name: "Herkules",

          value: 73,
        },
        {
          name: "Cascade",

          value: 60,
        },
        {
          name: "Mosaik",

          value: 44,
        },
      ]);
    } else if (hopfen === HopfenType.HERKULES) {
      setHopfenData([
        {
          name: "Herkules",

          value: 43,
        },
        {
          name: "Cascade",

          value: 90,
        },
        {
          name: "Mosaik",

          value: 44,
        },
      ]);
    } else if (hopfen === HopfenType.MOSAIK) {
      setHopfenData([
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
    }
  }, [hopfen]);

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
        <Grid item md={12} sx={{ height: "54vh" }}>
          <BierStepper
            selectedBeerType={selectedBeerType}
            setHopfen={setHopfen}
            selectedHopfenType={hopfen}
          />
        </Grid>
        <Grid item md={4} sx={{ height: "30vh" }}>
          <LagerDiagramm malzData={malzData} hopfenData={hopfenData} />
        </Grid>
        <Grid item md={8} sx={{ height: "30vh", pl: "8vw", pt: 6 }}>
          <RezeptNoteBox malz={selectedBeerType} hopfen={hopfen} />
        </Grid>
      </Grid>
    </Box>
  );
}
