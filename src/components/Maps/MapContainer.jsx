import React, { ReactElement } from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Map } from './Map'
import { Statistic, Card } from 'antd';
import { Col, Container, Row } from 'react-bootstrap'
import satellite from '../../assets/satellite.png'
export default function MapContainer() {
    const center = { lat: -34.397, lng: 150.644 };
    const zoom = 4;

    const render = (status) => {
        if (status === Status.LOADING) return <h3>{status} ..</h3>;
        if (status === Status.FAILURE) return <h3>{status} ...</h3>;
        return null;
    };


    return (

        <div>
            <Card
                title="GPS"
                headStyle={{ backgroundColor: '#2B3034', color: '#ffffff' }}
                bodyStyle={{ backgroundColor: '#31363C' }}
                bordered={false}
                style={{ marginBottom: '34px', marginTop: '0px' }}>
                <Row>
                    <Col sm={5} >
                        <img style={{ witdh: '200px', height: '200px',marginTop:'70px' ,borderRadius: '20px' }} src={satellite}></img>
                    </Col>
                    <Col sm={7}>
                        <Row>
                            <Col>
                                <div>
                                    <h6 style={{ color: '#fff' }}>Latitude</h6>
                                    <p style={{ color: '#f0ad4e', fontSize: '17px' }}>245 KM</p>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <h6 style={{ color: '#fff' }}>Longitude</h6>
                                    <p style={{ color: '#f0ad4e', fontSize: '17px' }}>245 KM</p>
                                </div>
                            </Col>
                            <img style={{ witdh: '250px', height: '220px', borderRadius: '20px' }} src='https://www.basarsoft.com.tr/wp-content/uploads/2019/05/googlemaps-api-002.jpg'></img>


                        </Row>
                    </Col>
                </Row>
                <Wrapper apiKey="AIzaSyBDVYE3K7japr5lyIvwvj50m_G7k-aFyKA" render={render}>
                    <Map center={center} zoom={zoom} />
                </Wrapper>
            </Card>

        </div>

    )
}
