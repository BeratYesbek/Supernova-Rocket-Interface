import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import { Container } from 'react-bootstrap';
import { Card } from 'antd';

export default function RocketPressure() {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        padding: 'auto',
        xField: '   ',
        yField: 'scales',
        annotations: [

            {
                type: 'regionFilter',
                start: ['min', 'median'],
                end: ['max', '0'],
                color: '#F4664A',
            },
            {
                type: 'text',
                position: ['min', 'median'],
                content: '中位数',
                offsetY: -4,
                style: {
                    textBaseline: 'bottom',
                },
            },
            {
                type: 'line',
                start: ['min', 'median'],
                end: ['max', 'median'],
                style: {
                    stroke: '#F4664A',
                    lineDash: [2, 2],
                },
            },
        ],
    };
    return (
        <div>
            <Card
                title="Pressure"
                headStyle={{ backgroundColor: '#2B3034', color: '#ffffff' }}
                bodyStyle={{ backgroundColor: '#31363C' }}
                bordered={false}
                style={{ marginBottom: '34px', marginTop: '0px' }}
            >
                <h6 style={{color: '#f0ad4e'}}>Pressure: 25 </h6>
                <Line {...config} />
            </Card>


        </div>
    )
}
