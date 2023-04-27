import React, {useState, useEffect} from 'react';
import {Box, Grid} from "@mui/material";
import StepperBoxTitle from "../atoms/StepperBoxTitle";
import LoadingProgressNormal from "../atoms/LoadingProgressNormal";

/**
 * @Step 6
 *
 * @Tasks:
 * 1.) Turbkegel bilden
 * 2.) Würze in Gärkeller pumpen
 */

type WhirlpoolBoxType = {
    setNextStep : Function;
}

export default function WhirlpoolBox({setNextStep}: WhirlpoolBoxType){
    const [builded, setBuilded] = useState(false);
    const [startPump, setStartPump] = useState(false);
    const [wasPumped, setWasPumped] = useState(false);
    const timerRef = React.useRef<number>();

    useEffect(() => {
        if(builded){
            setStartPump(true);
        }
    }, [builded]);

    useEffect((
    ) =>{
        if(wasPumped && builded){
            timerRef.current = window.setTimeout(() => {
                setNextStep();
            }, 2000);
        }
    }, [wasPumped]);

    return (
        <Box>
            <Grid container>
                <Grid item xs={12} md={12} lg={12} sx={{ textAlign: "center", pb: 5 }}>
                    <StepperBoxTitle title="Würze wird gekocht" />
                </Grid>
                <Grid item xs={4} md={4} lg={4} sx={{ pl: 3 }}>
                    <img src="images/whirlpool.png" style={{ width: "50%" }} />
                </Grid>
                <Grid item xs={8} md={8} lg={8}>
                    <Grid item xs={12}>
                        <LoadingProgressNormal
                            text={"Trubkegel wird gebildet: "}
                            sx={{ color: "#fca708" }}
                            delayTime={3300}
                            setSuccess={setBuilded}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        {startPump ? (
                            <LoadingProgressNormal
                                text="Würze wird in Gärkeller gepumpt: "
                                sx={{ color: "#f9ff7d" }}
                                delayTime={2100}
                                setSuccess={setWasPumped}
                            />
                        ):(<></>)}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}