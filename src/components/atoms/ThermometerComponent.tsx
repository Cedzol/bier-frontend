import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

type ThermometerComponentProps = {
  endTemperatur: number;
  setIsDone: Function;
  startTemperatur: number;
};

const styles = {
  dial: {
    width: `auto`,
    height: `auto`,
    color: "#000",
    border: "0.5px solid #fff",
    padding: "2px",
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
}: ThermometerComponentProps) {
  const [temperatur, setTemperatur] = useState(startTemperatur);
  const [query, setQuery] = React.useState("idle");
  const timerRef = React.useRef<number>();
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (query !== "idle") {
      setQuery("idle");
      return;
    }

    setQuery("progress");
    timerRef.current = window.setTimeout(() => {
      setTemperatur(temperatur + 1);
    }, 100);
  }, []);

  useEffect(() => {
    if (temperatur === endTemperatur) {
      setIsDone(true);
    }
  }, [temperatur]);

  return (
    <div style={styles.dial}>
      <div style={styles.dial}>
        <Chart
          height={120}
          chartType="Gauge"
          loader={<div></div>}
          data={[
            ["Label", "Value"],
            ["Temperatur", Number(temperatur)],
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
    </div>
  );
}
