import React, { useState } from "react";
import { BeerType } from "../../models/BeerType";
import { Box, Grid } from "@mui/material";
import StepperBoxTitle from "../atoms/StepperBoxTitle";
import LoadingProgressNormal from "../atoms/LoadingProgressNormal";
import { HopfenType } from "../../models/HopfenType";
import ThermometerComponent from "../atoms/ThermometerComponent";

/**
 * @Step 5
 *
 * @Tasks:
 * 1.) Maischepfanne reinigen
 * 2.) Würzepfanne aufheizen
 * 3.) Hopfen begeben
 */

type WürzespfanneBoxType = {
  setNextStep: Function;
  hopfen: HopfenType;
};

export default function WürzepfanneBox({
  setNextStep,
  hopfen,
}: WürzespfanneBoxType) {
  const [isClean, setClean] = useState(false);
  const [isHot, setHot] = useState(false);
  const [gotHopfen, setHopfen] = useState(false);
  const [startHopfen, setStartHopfen] = useState(false);
  const timerRef = React.useRef<number>();

  React.useEffect(() => {
    if (gotHopfen && isHot && isClean) {
      timerRef.current = window.setTimeout(() => {
        setNextStep();
      }, 3000);
    }
  }, [gotHopfen]);

  React.useEffect(() => {
    if (isHot) {
      setStartHopfen(true);
    }
  }, [isHot]);

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={12} lg={12} sx={{ textAlign: "center", pb: 5 }}>
          <StepperBoxTitle title="Würzepfanne" />
        </Grid>
        <Grid item xs={4} md={4} lg={4} sx={{ pl: 3 }}>
          <img src="images/maischepfanne.png" style={{ width: "50%" }} />
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <Grid item xs={12}>
            <LoadingProgressNormal
              text="Maischepfanne wird gereinigt: "
              sx={{ color: "#0080ff" }}
              delayTime={3000}
              setSuccess={setClean}
            />
          </Grid>
          <Grid item xs={12}>
            <ThermometerComponent
              text="Würzepfanne wird aufgeheizt: "
              endTemperatur={70}
              startTemperatur={10}
              setIsDone={setHot}
            />
          </Grid>
          <Grid item xs={12}>
            {startHopfen ? (
              <LoadingProgressNormal
                text={hopfen + " (Hopfen):"}
                sx={{ color: "#f9ff7d" }}
                delayTime={2000}
                setSuccess={setHopfen}
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
