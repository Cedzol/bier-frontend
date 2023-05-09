import React from "react";
import { BeerType } from "../../models/BeerType";
import { HopfenType } from "../../models/HopfenType";
import { Box, Paper, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

type RezeptNoteBoxProps = {
  malz: BeerType | string;
  hopfen: HopfenType | string;
};

export default function RezeptNoteBox({ malz, hopfen }: RezeptNoteBoxProps) {
  return (
    <Box sx={{ width: "18vw" }}>
      <Paper sx={{ bgcolor: "#292929", height: "20vh", width: "18vw", pl: 2 }}>
        <Grid container>
          <Grid xs={12} md={12} sx={{ pb: 4, pt: 2 }}>
            <Typography
              variant="body1"
              sx={{ fontSize: "20px", fontWeight: "bold", color: "#fff" }}
            >
              Ihr Bier Rezept:
            </Typography>
          </Grid>
          <Grid xs={4} md={4}>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: 400, color: "#fff" }}
            >
              Ihr Malz:
            </Typography>
          </Grid>
          <Grid xs={8} md={8}>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: 400, color: "#fff" }}
            >
              {malz}
            </Typography>
          </Grid>
          <Grid xs={4} md={4} sx={{ pt: 2 }}>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: 400, color: "#fff" }}
            >
              Ihr Hopfen:
            </Typography>
          </Grid>
          <Grid xs={8} md={8} sx={{ pt: 2 }}>
            <Typography
              variant="body1"
              sx={{ fontSize: "16px", fontWeight: 400, color: "#fff" }}
            >
              {hopfen}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
