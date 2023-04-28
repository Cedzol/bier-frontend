import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import StepperBoxTitle from "../atoms/StepperBoxTitle";
import LoadingProgressNormal from "../atoms/LoadingProgressNormal";
import ThermometerComponent from "../atoms/ThermometerComponent";

/**
 * @Step 7
 *
 * @Tasks:
 * 1.) Würze kühlen
 * 2.) Hefe beigeben
 */

type GaerkellerBoxType = {
  setNextStep: Function;
};

export default function GaerkellerBox({ setNextStep }: GaerkellerBoxType) {
  const [isCold, setCold] = useState(false);
  const [gotHefe, setHefe] = useState(false);
  const timerRef = React.useRef<number>();

  useEffect(() => {
    if (isCold && gotHefe) {
      timerRef.current = window.setTimeout(() => {
        setNextStep();
      }, 3000);
    }
  }, [gotHefe]);

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={12} lg={12} sx={{ textAlign: "center", pb: 5 }}>
          <StepperBoxTitle title="Gärung wird vorbereiten" />
        </Grid>
        <Grid item xs={4} md={4} lg={4} sx={{ pl: 3 }}>
          <img src="images/gaertank.png" style={{ width: "50%" }} />
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <Grid item xs={12}>
            <ThermometerComponent
              text="Würzepfanne wird abgekühlt (Ziel: 9°C): "
              endTemperatur={9}
              startTemperatur={90}
              setIsDone={setCold}
            />
          </Grid>
          <Grid item xs={12}>
            {isCold ? (
              <LoadingProgressNormal
                text={"Hefe wird beigegeben: "}
                sx={{ color: "#f9ff7d" }}
                delayTime={2000}
                setSuccess={setHefe}
              />
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
