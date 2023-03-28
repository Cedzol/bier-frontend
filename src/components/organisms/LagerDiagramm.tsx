import React, { PureComponent } from 'react';
import {Box, Grid} from "@mui/material";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid} from 'recharts';
import Typography from "@mui/material/Typography";

const dataBierTypes = [
    {
        name: 'Weizen',
        uv:89,
        pv:89,
        amt:89,
    },
    {
        name: 'Dunkel',
        uv:25,
        pv:25,
        amt:25,
    },
    {
        name: 'Lager',
        uv:64,
        pv:64,
        amt:64,
    }
]

const dataHopfenTypes = [
    {
        name: 'Herkules',
        uv:73,
        pv:73,
        amt:73,
    },
    {
        name: 'Cascade',
        uv:90,
        pv:90,
        amt:90,
    },
    {
        name: 'Mosaik',
        uv:14,
        pv:14,
        amt:14,
    }

]

export default function LagerDiagramm(){
    return(
        <Box>
            <Grid container>
                <Grid item xs={12} md={12} lg={12} sx={{textAlign: "center", pb: 3}}>
                    <Typography variant="body1" sx={{fontSize: "20px", fontWeight: "bold", color: "#fff"}}>Lagerbestand:</Typography>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <BarChart
                        width={270} height={320}
                        data={dataBierTypes}
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
                        <Bar dataKey="pv" fill="#f9ff7d" />
                    </BarChart>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <BarChart
                        width={270}
                        height={320}
                        data={dataHopfenTypes}
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
                        <Bar dataKey="pv" fill="#a2ff7d" />
                    </BarChart>
                </Grid>
            </Grid>
        </Box>
    )
}

/**
 *        <ResponsiveContainer width="100%" height="100%">
 *                 <BarChart
 *                     width={100}
 *                     height={50}
 *                     data={dataHopfenTypes}
 *                     margin={{
 *                         top: 0,
 *                         right: 0,
 *                         left: 0,
 *                         bottom: 0,
 *                     }}
 *                 >
 *                     <CartesianGrid strokeDasharray="3 3" />
 *                     <XAxis dataKey="name" />
 *                     <YAxis />
 *                     <Tooltip />
 *                     <Legend />
 *                     <Bar dataKey="pv" fill="#f9ff7d" />
 *                 </BarChart>
 *             </ResponsiveContainer>
 */