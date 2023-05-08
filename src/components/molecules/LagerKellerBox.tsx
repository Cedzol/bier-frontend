import React, {useEffect, useState} from "react";
import {Box, Grid} from "@mui/material";
import StepperBoxTitle from "../atoms/StepperBoxTitle";
import UntersuchungsProgress from "../atoms/UntersuchungsProgress";
import LoadingProgressNormal from "../atoms/LoadingProgressNormal";
import LinearProzessBar from "../atoms/LinearProzessBar";

/**
 * @Step 12
 *
 * @Tasks:
 * 1.) lagerung starten
 * 2.) Bier abfüllen
 * 3.) Rohstoffe nachbestellen
 * 4.) Rückstellmuster nehmen
 */

type LagerKellerBoxProps = {
    setNextStep: Function;
}

export default function LagerKellerBox({setNextStep}: LagerKellerBoxProps){
    const [isStarted, setStarted] = useState(false);
    const [isFilledUp, setFilledUp] = useState(false);
    const [gotOrder, setOrder] = useState(false);
    const [gotMuster, setMuster] = useState(false);

    const timerRef = React.useRef<number>();

    useEffect(() => {
        if(gotMuster){
            timerRef.current = window.setTimeout(() => {
                setNextStep();
            }, 3000);
        }
    }, [gotMuster])

    return(
        <Box>
            <Grid container>
                <Grid item xs={12} md={12} lg={12} sx={{ textAlign: "center", pb: 5 }}>
                    <StepperBoxTitle title="Lagerkeller" />
                </Grid>
                <Grid item xs={4} md={4} lg={4} sx={{ pl: 3 }}>
                    <img src="images/lagertank.png" style={{ width: "50%" }} />
                </Grid>
                <Grid item xs={8} md={8} lg={8}>
                    <Grid item xs={12}>
                        <LinearProzessBar delayTime={4000} setSuccess={setStarted} text="Lagerung starten"/>
                    </Grid>
                    <Grid item xs={12}>
                        {isStarted ? (
                            <LoadingProgressNormal
                                text="Bier wird abgefüllt: "
                                sx={{ color: "#f9ff7d" }}
                                delayTime={2000}
                                setSuccess={setFilledUp}
                            />
                        ) : (
                            <></>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        {isStarted ? (
                            <LoadingProgressNormal
                                text="Rohstoffe werden nachbestellt: "
                                sx={{ color: "#0080ff" }}
                                delayTime={2500}
                                setSuccess={setOrder}
                            />
                        ) : (
                            <></>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        {isFilledUp ? (
                            <LoadingProgressNormal
                                text="Rückstellmuster wird genommen: "
                                sx={{ color: "#0080ff" }}
                                delayTime={2000}
                                setSuccess={setMuster}
                            />
                        ) : (
                            <></>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}