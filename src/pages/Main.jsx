import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Template from '../components/Template/Template';
import * as signalR from "@microsoft/signalr";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button } from 'antd';

export default function Main() {
    const [connection, setConnection] = useState(null);
    const [dataRequestProp, setDataRequestProp] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl('http://localhost:5000/serialPortHub')
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (dataRequestProp) {
            connection.on('ReceiveData', message => {
                setData(message.split('*'));
                console.log(message);
            });
        }
    }, [dataRequestProp]);

    useEffect(() => {
        if (connection) {
            connection.on("ReceiveConnID", function (connId) {
                localStorage.setItem("connId", connId);
            })
        }

    }, [connection]);
    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                    console.log('Connected!');


                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);

    function dataRequest() {
        console.log("dataRequest");
        connection.invoke("SerialPortDataRequest", localStorage.getItem('connId'))
        setDataRequestProp(true);
    }

    return (
        <div>
            <div style={{ marginTop: '200px' }}>
                <Container>

                    <div style={{paddingTop: '50px'}}>
                        <Button onClick={() => dataRequest()} type="primary">Open Data Request</Button>

                    </div>
                    <Template value={{ data }} ></Template>
                </Container>
            </div>


        </div>
    )
}

/*

       <div>
            <Container>

                <div class="box">
                    <div class="sub-box">
                        <Row>
                            <Col>
                                <Coordinate></Coordinate>
                            </Col>
                            <Col>
                                <Temperature ></Temperature>
                            </Col>
                            <Col>
                                <Barometer></Barometer>
                            </Col>

                        </Row>

                    </div>
                </div>


            </Container>
            <Container>
                <div class="box">
                    <div class="sub-box">
                        <h4>Altitude Graph</h4>
                        <AltitudeGraphic></AltitudeGraphic>
                    </div>

                </div>
                <div class="box">
                    <div class="sub-box">
                        <h5>Pressure Graph</h5>
                        <RocketPressure></RocketPressure>
                    </div>

                </div>
                <div class="box">
                    <div class="sub-box">
                        <h5>Pressure Graph</h5>
                        <MapContainer></MapContainer>
                    </div>

                </div>

            </Container>

        </div>

*/