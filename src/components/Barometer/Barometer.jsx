import React from 'react'
import { Bullet } from '@ant-design/plots';

export default function Barometer() {
    const data = [
        {
            title: 'Barometer',
            ranges: [100],
            measures: [80],
            target: 85,
        },
    ];

    const config = {
        data,
        measureField: 'measures',
        rangeField: 'ranges',
        targetField: 'target',
        xField: 'title',
        color: {
            range: '#f0efff',
            measure: '#5B8FF9',
            target: '#3D76DD',
        },
        xAxis: {
            line: null,
        },
        yAxis: false,
        layout: 'vertical',
        label: {
            measure: {
                position: 'middle',
                style: {
                    fill: '#fff',
                },
            },
        },
        legend: {
            custom: true,
            position: 'bottom',
            items: [
                {
                    value: '54%',
                    name: 'measure',
                    marker: {
                        symbol: 'square',
                        style: {
                            fill: '#5B8FF9',
                            r: 5,
                        },
                    },
                },
                {
                    value: '50%',
                    name: 'Barometer',
                    marker: {
                        symbol: 'line',
                        style: {
                            stroke: '#3D76DD',
                            r: 5,
                        },
                    },
                },
            ],
        },
    };

    return (
        <div>
            <Bullet {...config} />
        </div>
    )
}
