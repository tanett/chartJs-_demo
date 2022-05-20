import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);




const PolarChart = () => {

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [100,200,23,456,322,111,222,0],
                backgroundColor:[ 'rgba(255,99,252,0.82)',
                                  'rgba(196,108,148,0.86)',
                                  'rgba(239,4,50,0.5)',
                                  'rgba(255,73,8,0.83)',
                                  'rgba(255,211,99,0.84)',
                                  'rgba(198,255,99,0.82)',
                                  'rgba(7,162,10,0.5)',

                ],
                borderColor: [
                    'rgba(255,99,252,1)',
                    'rgba(196,108,148,1)',
                    'rgba(239,4,50,1)',
                    'rgba(255,73,8,1)',
                    'rgba(255,211,99,1)',
                    'rgba(198,255,99,1)',
                    'rgba(7,162,10,1)',
                ],
                borderWidth: 1,
            },

        ],
    };
    return (
        <section >
            <h2>Polar Area</h2>
            <PolarArea data={data}  type={'polarArea'}/>
        </section>
    )

}

export default PolarChart
