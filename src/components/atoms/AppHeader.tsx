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
    <Box sx={{ bgcolor: "rgba(255, 255, 255, 0.7)", pt: 2, pb: 2, mb: 2 }}>
      <Grid container>
        <Grid item xs={2} md={2} lg={2}></Grid>
        <Grid item xs={10} md={10} lg={10}>
          <List>
            <ListItem>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#191919",
                  ml: "2vw",
                  float: "left",
                }}
              >
                Braue dein Bier
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#f9ff7d",
                  ml: "2vw",
                  float: "left",
                }}
              >
                {malz}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#a2ff7d",
                  ml: "2vw",
                  float: "left",
                }}
              >
                {hopfen}
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
