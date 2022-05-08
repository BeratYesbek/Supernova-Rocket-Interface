import React,{useState, useEffect} from 'react'
import { Bullet } from '@ant-design/plots';
import { Col, Container, Row } from 'react-bootstrap'
import { Tag, Card, Steps, Popover } from 'antd';
export default function Barometer(props) {

    const [propData, setPropData] = useState(null);

    useEffect(() => {
        if(props.value != null){
            setPropData(props.value.data)
        }
    },[props])


    const config1 = {
        data: [
            {
                title: 'Barometer',
                ranges: [1000],
                measures: [propData != null ? parseInt(propData[2]) : 0],
                target: 1000,
            },
        ],
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

    const config2 = {
        data: [
            {
                title: 'Barometer',
                ranges: [1000],
                measures: [propData != null ? parseInt(propData[3]) : 0],
                target: 1000,
            },
        ],
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
                        <Bullet style={{ height: '380px' }} {...config1} />
                    </Col>
                    <Col>
                        <h5 style={{ color: '#fff' }}>Barometer 2</h5>
                        <Bullet style={{ height: '380px' }} {...config2} />
                    </Col>
                </Row>
            </Card>



        </div>

    )
}
/*
@<aviyonikno>,<PAKETNUMARASI>,<BASINC1>,<BASINC2>,<Irtifa1<irtifa2>,<İNİŞHIZI>,<SICAKLIK>,<PİLGERİLİMİ>,<GPS1LAT>,<GPS1LONG>,<GPS1ALT>,<PITCH>,<ROLL>,<YAW>,<faz>,<pyro1stat>,<pyro2stat>#

@0*58*757*548*3543*89*56*25*52*41.045107575819024*29.118663621617802*66454*11*56*78*558*78*514#
@0*68*757*698*5345*89*56*25*52*41.045107575819024*29.118663621617802*66454*11*56*155*545*65*147#
@0*46*757*382*54354*89*56*25*52*41.045107575819024*29.118663621617802*66454*11*56*125*257*52*757#
@0*684*757*217*354*689*56*25*52*41.045107575819024*29.118663621617802*66454*11*56*15*693*02*5124#
@0*64*757*385*45*89*56*25*52*41.045107575819024*29.118663621617802*66454*11*56*25*833*58*522#
@0*648*757*534*45*698*56*25*52*41.045107575819024*29.118663621617802*66454*11*56*35*142*99*51274#
@1*5463*757*624*45*69868*56*25*52*41.045107575819024*29.118663621617802*66454*11*56*78*786*69*5154#
@1*2131*757*257*543*8689*56*25*52*41.045107575819024*29.118663621617802*66454*11*56*37*156*77*5144#
@1*32137*757*212*546*969*56*25*52*41.045107575819024*29.118663621617802*66454*11*56*51*345*88*51524#
@1*453453*757*535*546*349995*56*25*52*41.045107575819024*29.118663621617802*66454*11*56*26*353*66*2424#
@0*45345345*757*536*456*9*56*25*52*41.045107575819024*29.118663621617802*66454*11*56*78*564*44*2425#
@0*4534554*757*213*456*346995*56*25*52*41.045107575819024*29.118663621617802*66454*11*56*89*367*44*2575#
@0*45354345345*368*698*546*3495*56*25*52*41.045107575819024*29.118663621617802*66454*11*56*36*721*444*782#
@1*453543543*368*639*213*3495*56*25*52*41.045107575819024*29.118663621617802*66454*11*56*12*245*55*365#
@0*345786*525*698*12321*96*56*25*52*41.045107575819024*29.118663621617802*66454*11*56*45*453*21*5245#
@1*34554*253*698*123*3495*56*25*52*41.045107575819024*29.118663621617802*66454*11*56*89*245*25*237#


@1*5*0905*0507*3000*2950*25*27.8*8.21*5464*6546*56465*5644,,<003>,<2>,<1>,<1>#

Aviyonik no 
1 ana 2 yedek

Pyrostat fünye durumu 1 iken bağlı 0 iken bağlantı yok

*/