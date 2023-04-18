import React from "react";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import LoadingProgressNormal from "../atoms/LoadingProgressNormal";

/**
 * @Step 2
 *
 * @Tasks:
 * 1.) Maische reinpumpen
 * 2.) Maische filtern -> wird zu Würze
 */

type SecondStepType = {
  setNextStep: Function;
};

export default function SecondStepBox({ setNextStep }: SecondStepType) {
  const [maische, setMaische] = React.useState(false);
  const [filter, setFilter] = React.useState(false);
  const timerRef = React.useRef<number>();
  React.useEffect(() => {
    if (filter && maische) {
      timerRef.current = window.setTimeout(() => {
        setNextStep();
      }, 2000);
    }
  }, [filter]);

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={12} lg={12} sx={{ textAlign: "center", pb: 5 }}>
          <Typography
            variant="body1"
            sx={{ fontSize: "20px", fontWeight: "bold", color: "#fff" }}
          >
            Maische wird gefiltert
          </Typography>
        </Grid>
        <Grid item xs={4} md={4} lg={4} sx={{ pl: 3 }}>
          <img src="images/läuterbottich.png" style={{ width: "50%" }} />
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <Grid item xs={12}>
            <LoadingProgressNormal
              text={"Maische reinpumpen: "}
              sx={{ color: "#fca708" }}
              delayTime={3000}
              setSuccess={setMaische}
            />
          </Grid>
          <Grid item xs={12}>
            <LoadingProgressNormal
              text="Maische zu Würza gefiltert: "
              sx={{ color: "#f9ff7d" }}
              delayTime={4500}
              setSuccess={setFilter}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
