import React, {useEffect, useState} from "react";
import MainPage from "./pages/MainPage";
import {BeerType} from "../models/BeerType";
import {
    Box,
    Card,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    SelectChangeEvent,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Service from "../Services/Service";

export function Brewmaster() {
    const [beerType, setBeerType]: any = useState(BeerType.LAGER);
    const [showBeerSelection, setShowBeerSelection] = useState(true);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [beerTypeTitle, setBeerTypeTitle] = useState<string>("Wählen Sie die Art von Bier welche Sie brauen möchten!");


    function changeBeerType(newSelected: SelectChangeEvent) {
        let select: any = newSelected.target.value;
        setBeerType(select);
    }

    function startProccess() {
        setShowBeerSelection(false);
        if (!isRunning) {
            Service.start("SudhausUndGaerkellerID").then(() => {
                    Service.getValue("SudhausUndGaerkellerID").then((res) => {
                                return Service.completeBeerTypeTask(res.data[0].id,beerType.toString() ).then(() => {
                                })
                            });
                        }
                    )}

            setIsRunning(true)
        }


    useEffect(() => {
        Service.getValue("SudhausUndGaerkellerID").then((
                res) => {
                setBeerTypeTitle(res.data[0].name), console.log(res)
            }
        )

    }, [Brewmaster])


    let box = <><Box
        sx={{
            height: "100vh",
            width: "100vw",
            bgcolor: "#191919",
            overflow: "hidden",
        }}
    >
        {showBeerSelection ? (
            <div>
                <Card
                    sx={{
                        bgcolor: "#292929",
                        float: "center",
                        mt: 5,
                        height: "50vh",
                        width: "50vw",
                        ml: "25vw",
                        mr: "25vw",
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            color: "#fff",
                            ml: "5vw",
                            mb: "2vh",
                            mt: 5,
                        }}
                    >
                        {beerTypeTitle}
                    </Typography>
                    <Box
                        sx={{
                            float: "center",
                            mt: 10,
                            width: "50%",
                            ml: "25%",
                            mr: "25%",
                        }}
                    >
                        <FormControl fullWidth sx={{mb: 3}}>
                            <InputLabel id="demo-simple-select-label">
                                Bier-Sorte
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={beerType}
                                label="Bier-Sorte"
                                onChange={changeBeerType}
                            >
                                <MenuItem value={BeerType.DUNKEL}>Dunkel</MenuItem>
                                <MenuItem value={BeerType.LAGER}>Lager</MenuItem>
                                <MenuItem value={BeerType.WEIZEN}>Weizen</MenuItem>
                            </Select>
                        </FormControl>
                        <Button

                            onClick={startProccess}
                            disabled={
                                beerType !== BeerType.DUNKEL &&
                                beerType !== BeerType.LAGER &&
                                beerType !== BeerType.WEIZEN
                            }
                            sx={{
                                bgcolor: "#6dad53",
                                color: "#fff",
                                width: "75%",
                                ml: "12.5%",
                                mr: "12.5%",
                            }}
                        >
                            Start Prozesss
                        </Button>
                    </Box>
                </Card>
                <br></br>
            </div>
        ) : (
            <Box
                sx={{
                    height: "100vh",
                    width: "100vw",
                    bgcolor: "#191919",
                    overflow: "hidden",
                }}
            >
                <MainPage selectedBeerType={beerType} setRepeat={setShowBeerSelection}/>
            </Box>
        )}
    </Box></>;
    return box;
}
