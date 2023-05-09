import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Typography from "@mui/material/Typography";

type UntersuchungsProgressProps = {
  setSuccess: Function;
  text: string;
  time: number;
};

export default function UntersuchungsProgress({
  setSuccess,
  text,
  time,
}: UntersuchungsProgressProps) {
  const [isSuccess, setIsSucess] = useState(false);
  const [query, setQuery] = React.useState("idle");
  const [check, setCheck] = useState(false);
  const timerRef = React.useRef<number>();
  React.useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (query !== "idle") {
      setQuery("idle");
      return;
    }

    setQuery("progress");
    timerRef.current = window.setTimeout(() => {
      setCheck(true);
      setQuery("success");
    }, time);
  }, []);

  React.useEffect(() => {
    if (query === "success") {
      const randomResult = Math.floor(Math.random() * 10000);
      if (randomResult === 1) {
        setIsSucess(false);
        setSuccess(false);
      } else {
        setIsSucess(true);
        setSuccess(true);
      }
    }
  }, [check]);

  return (
    <Box
      sx={{
        bgcolor: "rgba(56,56,56,0.4)",
        height: "4vh",
        mb: "1vh",
        justifyContent: "center",
        width: "90%",
      }}
    >
      <Grid container>
        <Grid item xs={5} sx={{ textAlign: "left", justifyContent: "center" }}>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", color: "#fff", pl: 2 }}
          >
            {text}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <CheckCircleOutlineIcon
            sx={{ color: isSuccess ? "#a2ff7d" : "#737373" }}
          />
        </Grid>
        <Grid item xs={6}>
          <HighlightOffIcon
            sx={{
              color: isSuccess || query !== "success" ? "#737373" : "#ff0000",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
