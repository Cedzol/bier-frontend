import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import StepperBoxTitle from "../atoms/StepperBoxTitle";
import LinearProzessBar from "../atoms/LinearProzessBar";

/**
 * @Step 8
 *
 * @Tasks:
 * 1.) Gärprozess starten
 */

type GaerprozessStartBoxProps = {
  setNextStep: Function;
};

export default function GaerprozessStartBox({
  setNextStep,
}: GaerprozessStartBoxProps) {
  const [isStarted, setStarted] = useState(false);
  const timerRef = React.useRef<number>();

  useEffect(() => {
    if (isStarted) {
      timerRef.current = window.setTimeout(() => {
        setNextStep();
      }, 3000);
    }
  }, [isStarted]);

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={12} lg={12} sx={{ textAlign: "center", pb: 5 }}>
          <StepperBoxTitle title="Würzepfanne" />
        </Grid>
        <Grid item xs={4} md={4} lg={4} sx={{ pl: 3 }}>
          <img src="images/gaertank.png" style={{ width: "50%" }} />
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <LinearProzessBar
            delayTime={9000}
            setSuccess={setStarted}
            text="Gärungsprozess wird gestartet "
          />
        </Grid>
      </Grid>
    </Box>
  );
}
