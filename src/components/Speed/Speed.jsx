import React, { useEffect, useState } from 'react'
import { Statistic, Card } from 'antd';
import { Col, Container, Row } from 'react-bootstrap'
import { Gauge } from '@ant-design/plots';
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';
export default function Speed(props) {

    const [data, setData] = React.useState(null);
    const { Countdown } = Statistic;
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

    useEffect(() => {
        if (props.value != null) {
            setData(props.value.data);
        }
    }, [props])


    function onFinish() {
        console.log('finished!');
    }

    function onChange(val) {
        if (4.95 * 1000 < val && val < 5 * 1000) {
            console.log('changed!');
        }
    }


    const config = {
        percent: [data != null ? parseInt(data[6]) / 100 : 0],
        type: 'meter',
        innerRadius: 0.80,
        range: {
            ticks: [0, 1 / 3, 2 / 3, 1],
            color: ['#F4664A', '#FAAD14', '#30BF78'],
        },
        indicator: {
            pointer: {
                style: {
                    stroke: '#D0D0D0',
                },
            },
            pin: {
                style: {
                    stroke: '#D0D0D0',
                },
            },
        },
        style: {
            width: '200px',
            height: '200px'


        },
        statistic: {
            content: {
                style: {
                    fontSize: '15px',
                    lineHeight: '15px',
                    color: '#f0ad4e'
                },
            },
        },
    };

    return (
        <div>
            <Card
                title="Mission Clock/Count Down"
                headStyle={{ backgroundColor: '#2B3034', color: '#ffffff' }}
                bodyStyle={{ backgroundColor: '#31363C' }}
                bordered={false}
                style={{ marginBottom: '34px', marginTop: '0px' }}>

                <h6 style={{ color: '#fff' }}>Count</h6>
                {data != null ? <Timer active duration={null}>
                    <Timecode style={{ color: '#f0ad4e', fontSize: '17px' }} />
                </Timer> : ""}

                <Row>
                    <Col>
                        <h6 style={{ color: '#fff' }}>Distance</h6>
                        <p style={{ color: '#f0ad4e', fontSize: '17px' }}>245 KM</p>
                    </Col>
                    <Gauge {...config} />

                    <Col>
                        <h6 style={{ color: '#fff' }}>Current Speed</h6>
                        <p style={{ color: '#f0ad4e', fontSize: '17px' }}>{data != null ? data[6] : 0} KM/H</p>
                    </Col>

                </Row>

                <Row>
                    <Col>
                        <h6 style={{ color: '#fff' }}>Sunset</h6>
                        <p style={{ color: '#f0ad4e', fontSize: '17px' }}>45 Mins</p>
                    </Col>
                    <Col>
                        <h6 style={{ color: '#fff' }}>Next Transmission</h6>
                        <p style={{ color: '#f0ad4e', fontSize: '17px' }}>1 Hour</p>
                    </Col>

                </Row>


            </Card>
        </div >
    )
}
