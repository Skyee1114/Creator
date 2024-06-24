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

export function StatusBarChart({period}: IProps) {

    const theme = useTheme();
    const newTheme = createTheme({ palette: { mode: 'dark' } });
    const [itemNb, setItemNb] = useState(period);

    return (
        <ThemeProvider theme={newTheme}>
            <Box sx={{ width: '100%'}}>
                <BarChart
                    height={500}
                    series={series
                    .slice(0, 2)
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
        label: 'Paid',
        data: [
        242, 221, 76, 187, 147, 137, 189, 217, 62, 126, 72, 170, 118,
        187, 62, 163, 217, 51, 179, 159,
        ],
    },
    {
        label: 'Expired',
        data: [
        236, 225, 196, 336, 58, 106, 219, 162, 217, 203, 175, 86, 244,
        91, 243, 230, 80, 183, 168, 219,
        ],
    },
].map((s) => ({ ...s, highlightScope }));