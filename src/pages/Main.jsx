import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Coordinate from '../components/Coordinate/Coordinate';
import Temperature from '../components/Temperature/Temperature';
import Barometer from '../components/Barometer/Barometer';
import RocketPressure from '../components/RocketPressure/RocketPressure';
import AltitudeGraphic from '../components/AltitudeGraphic/AltitudeGraphic';
import styles from '../components/Coordinate/css/style.css'
import MapContainer from '../components/Maps/MapContainer';
import * as signalR from "@microsoft/signalr";
export default function Main() {
    const [connection, setConnection] = useState(null);
    const [dataRequestProp, setDataRequestProp] = useState(null);

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
            <Container>
                <button onClick={() => dataRequest()}>Reuqest</button>
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
    )
}
