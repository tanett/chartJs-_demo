import React, { useRef, useEffect, useState } from 'react';
import type ,{ ChartData, ChartArea } from 'chart.js';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);




const ChartGradientLine = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const colors = [
        'red',
        'orange',
        'yellow',
        'lime',
        'green',
        'teal',
        'blue',
        'purple',
    ];
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'GradientLine.js Bar Chart',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };



    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [-100,200],

            },
            {
                label: 'Dataset 2',
                data: [250,-25,255,300,],

            },
        ],
    };

    function createGradient(ctx, area) {
        const index = (Math.random()*colors.length).toFixed()
        const colorStart = colors[(Math.random()*colors.length).toFixed()];
        const colorMid = colors.filter(color => color !== colorStart)[(Math.random()*(colors.length-1)).toFixed()]
        const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
        const colorEnd = colors.filter(color => color !== colorStart && color !== colorMid)[(Math.random()*(colors.length-2)).toFixed()]

        console.log(gradient,colorStart,colorMid,colorEnd,index)
        gradient.addColorStop(0, colorStart);
        gradient.addColorStop(0.5, colorMid);
        gradient.addColorStop(1, colorEnd);

        return gradient;
    }


        const chartRef = useRef(null);
        const [chartData, setChartData] = useState({
            datasets: [],
        });

        useEffect(() => {
            const chart = chartRef.current;

            if (!chart) {
                return;
            }

            const chartData = {
                ...data,
                datasets: data.datasets.map(dataset => ({
                    ...dataset,
                    borderColor: createGradient(chart.ctx, chart.chartArea),
                })),
            };

            setChartData(chartData);
        }, []);

    return (
        <section >
            <h2>Gradient line</h2>
            <Chart ref={chartRef} type='line' data={chartData} />
        </section>
    )

}

export default ChartGradientLine;
