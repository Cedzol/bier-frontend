import React from "react";
import { Box, Grid } from "@mui/material";
import StepperBoxTitle from "../atoms/StepperBoxTitle";
import LoadingProgressNormal from "../atoms/LoadingProgressNormal";
import LinearProzessBar from "../atoms/LinearProzessBar";

/**
 * @Step 9
 *
 * @Tasks:
 * 1.) Gären (Prozess wird überwacht)
 * 2.) Proben entnehmen
 * 3.) Proben an labor senden
 */

type SecondGaerkellerBoxProps = {
  setNextStep: Function;
};

export default function SecondGaerkellerBox({
  setNextStep,
}: SecondGaerkellerBoxProps) {
  const [isGaert, setGaert] = React.useState(false);
  const [isChecked, setChecked] = React.useState(false);
  const [gotProbe, setGotProbe] = React.useState(false);
  const [sendedProbe, setSended] = React.useState(false);
  const timerRef = React.useRef<number>();

  React.useEffect(() => {
    if (sendedProbe && isChecked) {
      timerRef.current = window.setTimeout(() => {
        setNextStep();
      }, 3000);
    }
  }, [sendedProbe]);

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={12} lg={12} sx={{ textAlign: "center", pb: 5 }}>
          <StepperBoxTitle title="Gärung findet statt" />
        </Grid>
        <Grid item xs={4} md={4} lg={4} sx={{ pl: 3 }}>
          <img src="images/gaertank.png" style={{ width: "50%" }} />
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <Grid item xs={12}>
            <LinearProzessBar
              delayTime={12000}
              setSuccess={setGaert}
              text="Gärungsprozess wird durchgeführt"
            />
          </Grid>
          <Grid item xs={12}>
            <LoadingProgressNormal
              text={"Gärungsprozess wird überwacht: "}
              sx={{ color: "#0080ff" }}
              delayTime={12000}
              setSuccess={setChecked}
            />
          </Grid>
          <Grid item xs={12}>
            {isGaert ? (
              <LoadingProgressNormal
                text={"Probe wird entnommen: "}
                sx={{ color: "#0080ff" }}
                delayTime={3000}
                setSuccess={setGotProbe}
              />
            ) : (
              <></>
            )}
          </Grid>
          <Grid item xs={12}>
            {gotProbe ? (
              <LoadingProgressNormal
                text={"Probe wird an Labor verschickt: "}
                sx={{ color: "#0080ff" }}
                delayTime={2000}
                setSuccess={setSended}
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
