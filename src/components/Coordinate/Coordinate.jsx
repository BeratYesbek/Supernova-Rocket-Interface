import React, { useEffect, useState } from 'react'

import styles from "./css/style.css"
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Line } from '@ant-design/plots';
import { Card } from 'antd';
import Rocket from '../../assets/rocket-2.png';
export default function Coordinate() {

    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'year',
        yField: 'gdp',
        seriesField: 'name',
        background: '#fff',
        yAxis: {
            label: {
                formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
            },
        },
        legend: {
            position: 'top',
        },
        smooth: true,
        animation: {
            appear: {
                animation: 'path-in',
                duration: 5000,
            },
        },
    };
    console.log(Rocket)

    return (
        <div>

            <Card title="Coordinates" class='Card'
                headStyle={{ backgroundColor: '#2B3034', color: '#ffffff' }}
                bodyStyle={{ backgroundColor: '#31363C' }}
                bordered={false}
                style={{ marginBottom: '10px', marginTop: '10px' }}
                cover={<img src={Rocket} />}
            >

                <label className="x-coordinate">
                    <h6 style={{ color: "#f0ad4e" }}>X-axis</h6>
                    5545
                </label>
                <label className="y-coordinate">
                    <h6 style={{ color: "#f0ad4e" }}>Y-axis</h6>
                    6844
                </label>
                <label className="z-coordinate">
                    <h6 style={{ color: "#f0ad4e" }} >Z-axis</h6>
                    8754
                </label>
            </Card>
        </div>
    )
}
