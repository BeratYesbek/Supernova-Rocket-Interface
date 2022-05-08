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
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
export default function Rocket() {
    const [connection, setConnection] = useState(null);
    const [dataRequestProp, setDataRequestProp] = useState(null);
    const [portStatusRequest, setPortRequestStatus] = useState(false);
    const [ports, setPorts] = useState(null);
    const [selectedPort, setSelectedPort] = useState(null);

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
                    connection.invoke("GetAllComAsync", localStorage.getItem('connId'))
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);


    useEffect(() => {
        if (connection) {
            connection.on("GetAllComAsync", ports => {
                console.log(ports)
                setPorts(ports);
            })
        }
    }, [connection])

    function handleChange(value) {
        setSelectedPort(value);
        console.log(`selected ${value}`);
    }

    function StartCom() {
        if (selectedPort != null) {
            connection.invoke("SerialPortDataRequest", setSelectedPort)
            setDataRequestProp(true);
        } else {

            toast('You must chose a Port', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                progress: undefined,
            });

        }

    }

    return (
        <div >
            <Container>
                <div style={{ float: 'left', marginTop: '20px' }} >
                    <Select defaultValue="Choose Port" style={{ width: 120, background: '#333B41', backgroundColor: '#333B41' }} onChange={handleChange}>
                        {ports != null ? ports.map((port) => (
                            <Option value={port}>{port}</Option>
                        )) : ""}
                    </Select>
                    <Button style={{ marginLeft: '20px' }} onClick={() => StartCom()} ghost>Start COM</Button>

                </div>

                <div style={{ paddingTop: '50px' }}>
                    <GeneralInfo value={{ data }}></GeneralInfo>
                    <CustomSteps ></CustomSteps>
                </div>
                <Row >
                    <Col>
                        <Coordinate></Coordinate>
                    </Col>
                    <Col>
                        <Temperature value={{ data }} ></Temperature>
                    </Col>
                    <Col>
                        <Barometer value={{ data }}></Barometer>
                    </Col>
                    <Col>
                        <BatteryVoltage></BatteryVoltage>
                    </Col>

                </Row>

                <Row>

                    <Col>
                        <Speed value={{data}}></Speed>
                    </Col>

                    <Col>
                        <MapContainer value={{ data }}></MapContainer>
                    </Col>

                    <RocketPressure></RocketPressure>
                    <AltitudeGraphic></AltitudeGraphic>
                </Row>
            </Container>
            <ToastContainer />



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