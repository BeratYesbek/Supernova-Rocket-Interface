import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Tag, Card, Steps, Popover } from 'antd';


export default function CustomSteps() {

    const { Step } = Steps;

    const customDot = (dot, { status, index }) => (
        <Popover
            content={
                <span style={{ color: '#f0ad4e' }}>
                    step {index} status: {status}
                </span>
            }
        >
            {dot}
        </Popover>
    );


    return (
        <div >
            <Card title="Steps"
                headStyle={{ backgroundColor: '#2B3034', color: '#ffffff' }}
                bodyStyle={{ backgroundColor: '#31363C' }}
                bordered={false}>
                <Steps style={{ color: '#f0ad4e' }} current={5}  progressDot={customDot}>
                    <Step style={{ color: '#f0ad4e' }} bodyStyle={{ color: '#f0ad4e' }} headStyle={{ color: '#f0ad4e' }} title="On Rod" description="" />
                    <Step style={{ color: '#f0ad4e' }} title="Launch" description="" />
                    <Step style={{ color: '#f0ad4e' }} title="Burnout" description="" />
                    <Step style={{ color: '#f0ad4e' }} title="Apogee" description="" />
                    <Step style={{ color: '#f0ad4e' }} title="Drogue Parachute" description="" />
                    <Step style={{ color: '#f0ad4e' }} title="Payload Deployment" description="" />
                    <Step style={{ color: '#f0ad4e' }} title="Main Parachute" description="" />
                    <Step style={{ color: '#f0ad4e' }} title="Land off" description="" />
                    <Step style={{ color: '#f0ad4e' }} title="Rescue" description="" />
                </Steps>
            </Card>


        </div >
    )
}
