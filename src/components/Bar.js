import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,

} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,

    Title,
    Tooltip,
    Legend
);


const BarChart = () => {
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
                grace: 1
            },
        },
    };



     const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [100,200],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: [250,25,255,300,],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return (
        <section >
            <h2>Bar</h2>
            <Bar options={options} data={data}  type={'bar'}/>
        </section>
    )

}

export default BarChart
