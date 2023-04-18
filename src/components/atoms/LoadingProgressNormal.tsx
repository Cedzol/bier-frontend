import React from "react";
import { Box, CircularProgress, Fade, Grid } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Typography from "@mui/material/Typography";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

type LoadingProgressType = {
  text: string;
  sx: React.CSSProperties;
  delayTime: number;
  setSuccess: Function;
};

export default function LoadingProgressNormal({
  text,
  sx,
  delayTime,
  setSuccess,
}: LoadingProgressType) {
  const [query, setQuery] = React.useState("idle");
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
      setQuery("success");
      setSuccess(true);
    }, delayTime);
  }, []);

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
        <Grid item xs={0.5} sx={{ textAlign: "left" }}>
          <Box
            sx={{ bgcolor: "#fcca27", height: "4vh", pr: 2, width: "2px" }}
          />
        </Grid>
        <Grid item xs={2.5}>
          {query === "success" ? (
            <CheckBoxIcon sx={{ color: "#a2ff7d" }} />
          ) : (
            <CheckBoxOutlineBlankIcon sx={{ color: "#a2ff7d" }} />
          )}
        </Grid>
        <Grid
          item
          xs={5}
          sx={{ textAlign: "left", justifyContent: "center", pr: 2 }}
        >
          <Typography variant="body1" sx={{ fontSize: "16px", color: "#fff" }}>
            {text}
          </Typography>
        </Grid>
        <Grid item xs={4}>
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
              <CircularProgress style={sx} size={30} />
            </Fade>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
