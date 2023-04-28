import React, { useState, useEffect } from "react";
import {
  Box,
  Fade,
  Grid,
  LinearProgressProps,
  LinearProgress,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Typography from "@mui/material/Typography";

type LinearProzessBarProps = {
  delayTime: number;
  setSuccess: Function;
  text: string;
};

export default function LinearProzessBar({
  delayTime,
  setSuccess,
  text,
}: LinearProzessBarProps) {
  const [query, setQuery] = React.useState("idle");
  const timerRef = React.useRef<number>();
  const timerTwo = React.useRef<number>();
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (query !== "idle") {
      setQuery("idle");
      return;
    }

    setQuery("progress");
  }, []);

  React.useEffect(() => {
    if (progress === 100) {
      setQuery("success");
      setSuccess(true);
    } else {
      timerTwo.current = window.setTimeout(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 10 : prevProgress + 10
        );
      }, delayTime / 10);
    }
  }, [progress]);

  return (
    <Box
      sx={{
        bgcolor: "rgba(56,56,56,0.4)",
        height: "7vh",
        mb: "1vh",
        justifyContent: "center",
        width: "90%",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          {query === "success" ? (
            <></>
          ) : (
            <Fade
              in={query === "progress"}
              style={{
                transitionDelay: query === "progress" ? "800ms" : "0ms",
              }}
              unmountOnExit
            >
              <Box sx={{ width: "100%" }}>
                <LinearProgressWithLabel value={progress} />
              </Box>
            </Fade>
          )}
        </Grid>
        <Grid
          item
          xs={7}
          sx={{ textAlign: "left", justifyContent: "center", pr: 2 }}
        >
          <Typography variant="body1" sx={{ fontSize: "16px", color: "#fff" }}>
            {text}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          {query === "success" ? (
            <CheckBoxIcon sx={{ color: "#a2ff7d" }} />
          ) : (
            <CheckBoxOutlineBlankIcon sx={{ color: "#a2ff7d" }} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
