import React, { PureComponent } from "react";
import { Box, Grid } from "@mui/material";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import Typography from "@mui/material/Typography";
import { DiagrammType } from "../../models/DiagrammType";

type LagerDiagrammProps = {
  malzData: DiagrammType[];
  hopfenData: DiagrammType[];
};

export default function LagerDiagramm({
  malzData,
  hopfenData,
}: LagerDiagrammProps) {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={12} lg={12} sx={{ textAlign: "center", pb: 3 }}>
          <Typography
            variant="body1"
            sx={{ fontSize: "20px", fontWeight: "bold", color: "#fff" }}
          >
            Lagerbestand:
          </Typography>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <BarChart
            width={270}
            height={320}
            data={malzData}
            margin={{
              top: 0,
              right: 0,
              left: 2,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="value" fill="#f9ff7d" />
          </BarChart>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <BarChart
            width={280}
            height={320}
            data={hopfenData}
            margin={{
              top: 0,
              right: 0,
              left: 1,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="value" fill="#a2ff7d" />
          </BarChart>
        </Grid>
      </Grid>
    </Box>
  );
}
