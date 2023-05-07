import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

type ThermometerComponentProps = {
  endTemperatur: number;
  setIsDone: Function;
  startTemperatur: number;
  text: string;
};

const styles = {
  dial: {
    width: `auto`,
    height: `auto`,
    color: "#000",
  },
  title: {
    fontSize: "1em",
    color: "#000",
  },
};

export default function ({
  endTemperatur,
  setIsDone,
  startTemperatur,
  text,
}: ThermometerComponentProps) {
  const [temperatur, setTemperatur] = useState(startTemperatur);
  const timerRef = React.useRef<number>();
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);

  useEffect(() => {
    if (temperatur === endTemperatur) {
      setIsDone(true);
    } else {
      timerRef.current = window.setTimeout(() => {
        if (startTemperatur < endTemperatur) {
          setTemperatur(temperatur + 1);
        } else {
          setTemperatur(temperatur - 1);
        }
      }, 100);
    }
  }, [temperatur]);

  return (
    <div>
      <Grid container>
        <Grid item xs={0.5} sx={{ textAlign: "left" }}>
          <Box
            sx={{ bgcolor: "#fcca27", height: "4vh", pr: 2, width: "2px" }}
          />
        </Grid>
        <Grid item xs={2.5}>
          {temperatur === endTemperatur ? (
            <CheckBoxIcon sx={{ color: "#a2ff7d" }} />
          ) : (
            <CheckBoxOutlineBlankIcon sx={{ color: "#a2ff7d" }} />
          )}
        </Grid>
        <Grid item xs={9} md={9} lg={9} sx={{ textAlign: "left" }}>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", color: "#fff", float: "left" }}
          >
            {text}
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <div style={styles.dial}>
            <Chart
              height={120}
              chartType="Gauge"
              loader={<div></div>}
              data={[
                ["Label", "Value"],
                ["Temperatur", temperatur],
              ]}
              options={{
                redFrom: 90,
                redTo: 200,
                yellowFrom: 50,
                yellowTo: 90,
                minorTicks: 5,
                min: -50,
                max: 300,
              }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
