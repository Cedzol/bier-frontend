import React from 'react';
import {Box, Grid} from "@mui/material";
import BierStepper from "../organisms/BierStepper";
import LagerDiagramm from "../organisms/LagerDiagramm";

export default function MainPage(){
    return(
        <Box sx={{height: "100vh", width: "100vw", bgcolor: "#191919", overflow: "hidden"}}>
            <Grid container sx={{height: "90vh"}}>
                <Grid item md={12} sx={{height: "45vh"}}>
                    <BierStepper/>
                </Grid>
                <Grid item md={12} sx={{height: "45vh"}}>
                    <LagerDiagramm/>
                </Grid>
            </Grid>
        </Box>
    )
}