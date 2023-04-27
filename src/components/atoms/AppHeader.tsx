import React from "react";
import { BeerType } from "../../models/BeerType";
import { HopfenType } from "../../models/HopfenType";
import { Box, Grid, List, ListItem } from "@mui/material";
import Typography from "@mui/material/Typography";

type AppHeaderProps = {
  malz: BeerType | string;
  hopfen: HopfenType | string;
};

export default function AppHeader({ malz, hopfen }: AppHeaderProps) {
  return (
    <Box
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.3)",
        pb: 2,
        height: "4.5vh",
      }}
    >
      <Grid container>
        <Grid item xs={0.6} md={0.6} lg={0.6}>
          <img
            src="./images/img.png"
            style={{ width: "55%", marginLeft: 6 }}
          />
        </Grid>
        <Grid item xs={11} md={11} lg={11} sx={{alignItems: "center", justifyItems: "center", justifyContent: "center"}}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#f9ff7d",
                  ml: "1vw",
                }}
              >
                Malz: {malz}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#a2ff7d",
                  ml: "1vw",
                }}
              >
                Hopfen: {hopfen}
              </Typography>

        </Grid>
      </Grid>
    </Box>
  );
}
