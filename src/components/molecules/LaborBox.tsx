import React from "react";
import { Box, Grid } from "@mui/material";
import StepperBoxTitle from "../atoms/StepperBoxTitle";
import LoadingProgressNormal from "../atoms/LoadingProgressNormal";
import Service from "../../Services/Service";

/**
 * @Step 10
 *
 * @Tasks:
 * 1.) Probe wird getestet
 */

type LaborBoxProps = {
  setNextStep: Function;
};

export default function LaborBox({ setNextStep }: LaborBoxProps) {
  const [isTested, setTested] = React.useState(false);
  const [sendedResults, setSended] = React.useState(false);
  const timerRef = React.useRef<number>();

  React.useEffect(() => {
      Service.getValue("ProbenTestenID").then((typ:any) => {
        return Service.completeLabor(typ.data[0].id)
      })
      timerRef.current = window.setTimeout(() => {
        setNextStep();
      }, 3000);
  }, [sendedResults]);

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={12} lg={12} sx={{ textAlign: "center", pb: 5 }}>
          <StepperBoxTitle title="Labor / Untersuchung" />
        </Grid>
        <Grid item xs={4} md={4} lg={4} sx={{ pl: 3 }}>
          <img src="images/Labor.png" style={{ width: "50%" }} />
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <Grid item xs={12}>
            <LoadingProgressNormal
              text="Probe wird analysiert: "
              sx={{ color: "#f9ff7d" }}
              delayTime={3000}
              setSuccess={setTested}
            />
          </Grid>
          <Grid item xs={12}>
            {isTested ? (
              <LoadingProgressNormal
                text={"Resultate werden gesendet: "}
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
