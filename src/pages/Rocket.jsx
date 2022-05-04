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
import GeneralInfo from '../components/GeneralInfo/GeneralInfo';
import { Button } from 'antd';
import { Select } from 'antd';

export default function Rocket() {
    const [connection, setConnection] = useState(null);
    const [dataRequestProp, setDataRequestProp] = useState(null);
    const [portStatusRequest, setPortRequestStatus] = useState(false);
    const [ports, setPorts] = useState(null);

    const [data, setData] = useState(null);
    const { Option } = Select;

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


    useEffect(() => {
        if (connection) {
            connection.invoke("GetAllComAsync", localStorage.getItem('connId'))

            connection.on("GetAllComAsync", ports => {
                console.log(ports)
                setPorts(ports);
            })
        }
    }, [connection])

    function dataRequest() {
        console.log("dataRequest");
        connection.invoke("SerialPortDataRequest", localStorage.getItem('connId'))
        setDataRequestProp(true);
    }


    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <div >
            <Container>
                <div style={{ float: 'left', marginTop: '20px' }} >
                    <Select defaultValue="lucy" style={{ width: 120, background: '#333B41', backgroundColor: '#333B41' }} onChange={handleChange}>
                        <Option value="jack">Jack</Option>
                    </Select>
                    <Button style={{ marginLeft: '20px' }} ghost>Chose COM</Button>

                </div>

                <div style={{ paddingTop: '50px' }}>
                    <GeneralInfo></GeneralInfo>
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