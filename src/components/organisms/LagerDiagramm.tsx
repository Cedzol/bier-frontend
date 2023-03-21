import React, { PureComponent } from 'react';
import {Box} from "@mui/material";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dataBierTypes = [
    {
        name: 'Weizen',
        uv:80,
        pv:80,
        amt:80,
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
                <BarChart
                    width={200} height={300}
                    data={dataBierTypes}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Legend />
                    <Bar dataKey="pv" fill="#a2ff7d" />
                </BarChart>
            <BarChart
                width={200}
                height={300}
                data={dataHopfenTypes}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Legend />
                <Bar dataKey="pv" fill="#f9ff7d" />
            </BarChart>
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