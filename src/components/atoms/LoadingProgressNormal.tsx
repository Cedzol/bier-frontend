import React from 'react';
import {Box, CircularProgress, Fade, Grid} from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Typography from "@mui/material/Typography";

type LoadingProgressType = {
    text: string;
    sx: React.CSSProperties;
    delayTime: number;
    setSuccess: Function;
}

export default function LoadingProgressNormal({text,sx, delayTime, setSuccess}: LoadingProgressType) {
    const [query, setQuery] = React.useState("idle");
    const timerRef = React.useRef<number>();
    React.useEffect(()=> {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        if (query !== "idle") {
            setQuery("idle");
            return;
        }

        setQuery("progress");
        timerRef.current = window.setTimeout(() => {
            setQuery("success");
            setSuccess(true);
        }, delayTime);
    },[])

    return (
        <Box>
            <Grid container sx={{pt: 2}}>
                <Grid item xs={6} sx={{textAlign: "left"}}>
                    <Typography variant="body1" sx={{fontSize: "16px", color: "#fff"}}>{text}</Typography>
                </Grid>
                <Grid item xs={6}>
                    {query === "success" ? (
                        <CheckBoxIcon sx={{color: "#a2ff7d"}}/>
                    ) : (
                        <Fade
                            in={query === "progress"}
                            style={{
                                transitionDelay: query === "progress" ? "800ms" : "0ms"
                            }}
                            unmountOnExit
                        >
                            <CircularProgress style={sx}/>
                        </Fade>
                    )}
                </Grid>
            </Grid>
        </Box>
    )
}