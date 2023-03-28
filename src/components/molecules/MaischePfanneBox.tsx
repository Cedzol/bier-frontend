import React from 'react';
import {BeerType} from "../../models/BeerType";
import {Box, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import LoadingProgressNormal from "../atoms/LoadingProgressNormal";


type MaischePfanneType = {
    malz: BeerType,
    setNextStep: Function;
}

export default function MaischePfanneBox({malz, setNextStep}: MaischePfanneType){
    const [water, setWater] = React.useState(false);
    const timerRef = React.useRef<number>();
    const [didMalz, setDidMalz] = React.useState(false);
    React.useEffect(() => {
        if(water && didMalz){
            timerRef.current = window.setTimeout(() => {
                setNextStep();
            }, 2000)
        }
    }, [water])

    return(
        <Box>
                <Grid container>
                    <Grid item xs={12} md={12} lg={12} sx={{textAlign: "center", pb: 5}}>
                        <Typography variant="body1" sx={{fontSize: "20px", fontWeight: "bold", color: "#fff"}}>Maische wird hergestellt</Typography>
                    </Grid>
                    <Grid item xs={4} md={4} lg={4} sx={{pl:3}}>
                        <img src="images/maischepfanne.png" style={{width: "50%"}}/>
                    </Grid>
                    <Grid item xs={8} md={8} lg={8}>
                        <Grid item xs={12}>
                           <LoadingProgressNormal text="Wasser: " sx={{color: "#0080ff"}} delayTime={3000} setSuccess={setWater}/>
                        </Grid>
                        <Grid item xs={12}>
                            <LoadingProgressNormal text={malz + " (Malz):"} sx={{color: "#f9ff7d"}} delayTime={2000} setSuccess={setDidMalz}/>
                        </Grid>
                    </Grid>
                </Grid>
        </Box>
    )
}