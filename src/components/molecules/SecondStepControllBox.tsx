import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import LoadingProgressNormal from "../atoms/LoadingProgressNormal";
import UntersuchungsProgress from "../atoms/UntersuchungsProgress";
import Service from "../../Services/Service";
import StepperBoxTitle from "../atoms/StepperBoxTitle";

/**
 * @Step 3
 *
 * @Tasks:
 * 1.) Kontrolle (Ist Maisch klar)
 * 2.) Maische abpumen / oder nichts
 */

type SecondStepControllType = {
  setNextStep: Function;
  setLastStep: Function;
};

export default function SecondStepControllBox({
  setNextStep,
  setLastStep,
}: SecondStepControllType) {
  const [isClear, setIsClear] = useState(false);
  const [controll, setControll] = useState(1);
  const [wirdAbgepumt, setWirdAbgepumt] = useState(false);
  const [isAbgepumpt, setIsAbgepumt] = useState(false);
  const timerRef = React.useRef<number>();

  React.useEffect(() => {
    if (isAbgepumpt) {
      timerRef.current = window.setTimeout(() => {
        setNextStep();
      }, 3000);
    }
  }, [isAbgepumpt]);

  React.useEffect(() => {
    if (isClear) {
      setWirdAbgepumt(true);
      Service.getValue("SudhausUndGaerkellerID").then((res:any) => {
        return Service.completeBeerClear(res.data[0].id,"Klar")
      })
    } else if (controll !== 1) {
      timerRef.current = window.setTimeout(() => {
        setLastStep();
      }, 3000);
    } else {
      setControll(2);
    }
  }, [isClear]);

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={12} lg={12} sx={{ textAlign: "center", pb: 5 }}>
          <StepperBoxTitle title="Würze wird überprüft" />
        </Grid>
        <Grid item xs={4} md={4} lg={4} sx={{ pl: 3 }}>
          <img src="images/läuterbottich.png" style={{ width: "50%" }} />
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <Grid item xs={12}>
            <UntersuchungsProgress
              setSuccess={setIsClear}
              text={"Ist Würze klar? "}
              time={3000}
            />
          </Grid>
          <Grid item xs={12}>
            {wirdAbgepumt ? (
              <LoadingProgressNormal
                text="Würze wird abgepumt: "
                sx={{ color: "#f9ff7d" }}
                delayTime={4500}
                setSuccess={setIsAbgepumt}
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
