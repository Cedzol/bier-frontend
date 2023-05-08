import React, {useEffect, useState} from "react";
import {Box, Grid} from "@mui/material";
import BierStepper from "../organisms/BierStepper";
import LagerDiagramm from "../organisms/LagerDiagramm";
import {DiagrammType} from "../../models/DiagrammType";
import {BeerType} from "../../models/BeerType";
import AppHeader from "../atoms/AppHeader";
import {HopfenType} from "../../models/HopfenType";

type MainPageProcessProps = {
  selectedBeerType: BeerType | any | string;
  setRepeat: Function;
};

export default function MainPage({ selectedBeerType, setRepeat }: MainPageProcessProps) {
  const [hopfen, setHopfen] = useState<HopfenType | string>("");
  const timerRef = React.useRef<number>();
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
    if(hopfen === HopfenType.CASCADE){
      setHopfenData([    {
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
        },])
    }else if(hopfen === HopfenType.HERKULES){
      setHopfenData([    {
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
        },])
    }else if(hopfen === HopfenType.MOSAIK){
      setHopfenData([    {
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
        },])
    }
  }, [hopfen])

  const resetData = () => {
    if(selectedBeerType === BeerType.DUNKEL){
      setMalzData([
        {
          name: "Weizen",

          value: 89,
        },
        {
          name: "Dunkel",

          value: 95,
        },
        {
          name: "Lager",

          value: 64,
        },
      ]);

    }else if(selectedBeerType === BeerType.WEIZEN){
      setMalzData([
        {
          name: "Weizen",

          value: 100,
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

    }else if(selectedBeerType === BeerType.LAGER){
      setMalzData([
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

          value: 94,
        },
      ]);
    }
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

        value: 44,
      },
    ]);
    timerRef.current = window.setTimeout(() => {
      setRepeat(true);
    }, 4000);
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
      <Grid container sx={{ height: "90vh" }}>
        <Grid item md={12} sx={{height: "6vh"}}>
          <AppHeader malz={selectedBeerType} hopfen={hopfen} />
        </Grid>
        <Grid item md={12} sx={{ height: "54vh" }}>
          <BierStepper
            selectedBeerType={selectedBeerType}
            setHopfen={setHopfen}
            selectedHopfenType={hopfen}
            resetData={resetData}
          />
        </Grid>
        <Grid item md={4} sx={{ height: "30vh" }}>
          <LagerDiagramm malzData={malzData} hopfenData={hopfenData} />
        </Grid>
      </Grid>
    </Box>
  );
}
