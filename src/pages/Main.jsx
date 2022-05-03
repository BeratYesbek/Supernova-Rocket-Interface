import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import * as signalR from "@microsoft/signalr";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Col, Container, Row } from 'react-bootstrap'
import Temperature from '../components/Temperature/Temperature';
import Coordinate from '../components/Coordinate/Coordinate';
import Barometer from '../components/Barometer/Barometer';
import RocketPressure from '../components/RocketPressure/RocketPressure';
import AltitudeGraphic from '../components/AltitudeGraphic/AltitudeGraphic';
import MapContainer from '../components/Maps/MapContainer';
import Speed from '../components/Speed/Speed';

import BatteryVoltage from '../components/BatteryVoltage/BatteryVoltage';
import CustomSteps from '../components/CustomSteps/CustomSteps';
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
            <Container>
                <div style={{ paddingTop: '20px' }}>
                    <CustomSteps ></CustomSteps>
                </div>
                <Row >
                    <Col>
                        <Coordinate></Coordinate>
                    </Col>
                    <Col>
                        <Temperature ></Temperature>
                    </Col>
                    <Col>
                        <Barometer></Barometer>
                    </Col>
                    <Col>
                        <BatteryVoltage></BatteryVoltage>
                    </Col>

                </Row>

                <Row>

                    <Col>
                        <Speed></Speed>
                    </Col>

                    <Col>
                        <MapContainer></MapContainer>
                    </Col>

                    <RocketPressure></RocketPressure>
                    <AltitudeGraphic></AltitudeGraphic>
                </Row>
            </Container>


        </div>







    )
}

/*
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


*/