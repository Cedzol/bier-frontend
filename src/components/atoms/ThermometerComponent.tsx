import React, { useEffect, useState } from "react";
import Thermometer from "react-thermometer";

type ThermometerComponentProps = {
  endTemperatur: number;
  setIsDone: Function;
  startTemperatur: number;
};

const styles = {
  dial: {
    display: "inline-block",
    width: `300px`,
    height: `auto`,
    color: "#000",
    border: "0.5px solid #fff",
    padding: "2px",
  },
  title: {
    fontSize: "1em",
    color: "#000",
    marginTop: "15px",
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
      <Thermometer
        theme="light"
        value={temperatur}
        max="100"
        steps="1"
        format="°C"
        size="normal"
        height="180"
      />
      <div style={styles.title}>
        {}: {value}°C
      </div>
    </div>
  );
}
