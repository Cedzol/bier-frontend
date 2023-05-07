import React from "react";
import Typography from "@mui/material/Typography";

/**
 * This Component Is just a Title but I dont want to write it every time
 */

type StepperBoxTitleProps = {
  title: string;
};

export default function StepperBoxTitle({ title }: StepperBoxTitleProps) {
  return (
    <Typography
      variant="body1"
      sx={{ fontSize: "20px", fontWeight: "bold", color: "#fff" }}
    >
      {title}
    </Typography>
  );
}
