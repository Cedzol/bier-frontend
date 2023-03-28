import React from 'react';
import {Box, Grid} from "@mui/material";
import BierStepper from "../organisms/BierStepper";
import LagerDiagramm from "../organisms/LagerDiagramm";

export default function MainPage(){
    return(
        <Box sx={{height: "100vh", width: "100vw", bgcolor: "#191919", overflow: "hidden"}}>
            <Grid container sx={{height: "90vh"}}>
                <Grid item md={5}></Grid>
                <Grid item md={7} sx={{height: "57vh"}}>
                    <BierStepper/>
                </Grid>
                <Grid item md={4} sx={{height: "33vh"}}>
                    <LagerDiagramm/>
                </Grid>
            </Grid>
        </Box>
    )
}