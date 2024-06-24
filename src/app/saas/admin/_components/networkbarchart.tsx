'use client'

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BarChart } from '@mui/x-charts/BarChart';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';

interface IProps {
    period: number
}

export function NetworkBarChart({period}: IProps) {

    const theme = useTheme();
    const newTheme = createTheme({ palette: { mode: 'dark' } });
    const [itemNb, setItemNb] = useState(period);

    return (
        <ThemeProvider theme={newTheme}>
            <Box sx={{ width: '100%'}}>
                <BarChart
                    height={500}
                    series={series
                    .slice(0, 4)
                    .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
                />
            </Box>
        </ThemeProvider>        
    );
}

const highlightScope = {
    highlighted: 'series',
    faded: 'global',
} as const;

const series = [
    {
        label: 'Ethereum',
        data: [
        2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269, 724, 1707, 1188,
        1879, 626, 1635, 2177, 516, 1793, 1598,
        ],
    },
    {
        label: 'Arbitrum',
        data: [
        2362, 2254, 1962, 1336, 586, 1069, 2194, 1629, 2173, 2031, 1757, 862, 2446,
        910, 2430, 2300, 805, 1835, 1684, 2197,
        ],
    },
    {
        label: 'USDT ERC20',
        data: [
        1145, 1214, 975, 2266, 1768, 2341, 747, 1282, 1780, 1766, 2115, 1720, 1057,
        2000, 1716, 2253, 619, 1626, 1209, 1786,
        ],
    },
    {
        label: 'USDT TRC20',
        data: [
        2361, 979, 2430, 1768, 1913, 2342, 1868, 1319, 1038, 2139, 1691, 935, 2262,
        1580, 692, 1559, 1344, 1442, 1593, 1889,
        ],
    },
].map((s) => ({ ...s, highlightScope }));