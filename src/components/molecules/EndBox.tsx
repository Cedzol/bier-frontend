import React from 'react';
import {Box, Button, Grid} from "@mui/material";
import StepperBoxTitle from "../atoms/StepperBoxTitle";
import Typography from "@mui/material/Typography";

/**
 * @Step 13
 *
 * @Tasks:
 * 1.) Ends process on user input
 */




export default function EndBox(){
    return(
        <Box>
            <Grid container>
                <Grid item xs={12} md={12} lg={12} sx={{ textAlign: "center", pb: 5 }}>
                    <StepperBoxTitle title="Prozess-Ende" />
                </Grid>
                <Grid item xs={2} md={2} lg={2} sx={{ pl: 3 }}>
                    <img src="images/img.png" style={{ width: "90%" }} />
                </Grid>
                <Grid item xs={10} md={10} lg={10} sx={{textAlign: "center"}}>
                    <Typography variant="body1" sx={{color: "#fff", fontSize: 16, fontWeight: 400, width: "80%"}}>Ihr Bier ist fertig gebraut und abgefüllt. Geniessen Sie es!! Ihr Rezept bleibt bei uns natürlich geheim.</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}