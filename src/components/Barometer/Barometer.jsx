import React from 'react'
import { Bullet } from '@ant-design/plots';
import { Col, Container, Row } from 'react-bootstrap'
import { Tag, Card, Steps, Popover } from 'antd';
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
            target: '#f0ad4e',
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
                            fill: '#f0ad4e',
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
                            stroke: '#f0ad4e',
                            r: 5,
                        },
                    },
                },
            ],
        },
    };

    return (
        <div>
            <Card title="Barometers" class='Card'
                headStyle={{ backgroundColor: '#2B3034', color: '#ffffff' }}
                bodyStyle={{ backgroundColor: '#31363C' }}
                bordered={false}
                style={{ marginBottom: '10px', marginTop: '10px' }}

            >
                <Row>
                    <Col>
                        <h5 style={{ color: '#fff' }}>Barometer 1</h5>
                        <Bullet style={{ height: '380px' }} {...config} />
                    </Col>
                    <Col>
                        <h5 style={{ color: '#fff' }}>Barometer 2</h5>
                        <Bullet style={{ height: '380px' }} {...config} />
                    </Col>
                </Row>
            </Card>



        </div>

    )
}
/*
@<aviyonikno>,<PAKETNUMARASI>,<BASINC1>,<BASINC2>,<Irtifa1<irtifa2>,<İNİŞHIZI>,<SICAKLIK>,<PİLGERİLİMİ>,<GPS1LAT>,<GPS1LONG>,<GPS1ALT>,<PITCH>,<ROLL>,<YAW>,<faz>,<pyro1stat>,<pyro2stat>#


@<1>,<>,<0905>,<0507>,<3000<2950><25>,<27.8>,<8.21>,<9hane>,<9hane>,<2700>,<125>,<030>,<003>,<2>,<1>,<1>#

Aviyonik no 
1 ana 2 yedek

Pyrostat fünye durumu 1 iken bağlı 0 iken bağlantı yok

*/