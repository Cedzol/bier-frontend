import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

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
        setTemperatur(temperatur + 1);
      }, 100);
    }
  }, [temperatur]);

  return (
    <div>
      <Grid container>
        <Grid item xs={6} md={6} lg={6}>
          <Typography variant="body1" sx={{ fontSize: "16px", color: "#fff" }}>
            {text}
          </Typography>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
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
                min: -10,
                max: 300,
              }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
