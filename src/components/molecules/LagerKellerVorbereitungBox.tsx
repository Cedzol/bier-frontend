import React from "react";
import {Box, Grid} from "@mui/material";
import StepperBoxTitle from "../atoms/StepperBoxTitle";
import UntersuchungsProgress from "../atoms/UntersuchungsProgress";
import LoadingProgressNormal from "../atoms/LoadingProgressNormal";

/**
 * @Step 11
 *
 * @Tasks:
 * 1.) Resultate anschauen
 * 2.) entweder blocken oder weiter
 */

type LagerKellerVorbereitungBoxProps = {
  setNextStep: Function;
};

export default function LagerKellerVorbereitungBox({
  setNextStep,
}: LagerKellerVorbereitungBoxProps) {
  const [isAnalaysed, setAnalaysed] = React.useState(false);
  const [lager, setLager] = React.useState(false);
  const [isReady, setReady] = React.useState(false)
  const [state, setState] = React.useState(1);
  const timerRef = React.useRef<number>();

  React.useEffect(() => {
    if(state !== 1 && !isAnalaysed){
      alert("Die Probe war schlecht!!!")
    }else if(state !== 1 && isAnalaysed){
      setLager(true)
    }else{
      setState(2);
    }
  }, [isAnalaysed]);

  React.useEffect(() => {
    if(isReady){
      timerRef.current = window.setTimeout(() => {
        setNextStep();
      }, 3000);
    }
  }, [isReady])

  return(
      <Box>
        <Grid container>
          <Grid item xs={12} md={12} lg={12} sx={{ textAlign: "center", pb: 5 }}>
            <StepperBoxTitle title="Lagerkeller Vorbereitung" />
          </Grid>
          <Grid item xs={4} md={4} lg={4} sx={{ pl: 3 }}>
            <img src="images/lagertank.png" style={{ width: "50%" }} />
          </Grid>
          <Grid item xs={8} md={8} lg={8}>
            <Grid item xs={12}>
              <UntersuchungsProgress
                  setSuccess={setAnalaysed}
                  text={"Sind die Laborergebnisse gut? "}
                  time={3000}
              />
            </Grid>
            <Grid item xs={12}>
              {lager ? (
                  <LoadingProgressNormal
                      text="Lager wird vorbereitet: "
                      sx={{ color: "#f9ff7d" }}
                      delayTime={4500}
                      setSuccess={setReady}
                  />
              ) : (
                  <></>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
  )
}
