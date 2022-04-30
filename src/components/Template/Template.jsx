import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Tag, Card, Steps, Step, Popover } from 'antd';

export default function Template(props) {

    const [data, setData] = useState(null);
    const { Step } = Steps;

    useEffect(() => {
        setData(props.value.data)
        console.log(props.value.data)
    }, [props])

    const customDot = (dot, { status, index }) => (
        <Popover
            content={
                <span>
                    step {index} status: {status}
                </span>
            }
        >
            {dot}
        </Popover>
    );

    return (
        <div>
            <Row>
                <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                    {data != null ? data[2] === "1" ? <Tag color="green">Ana Avyonik Sistem</Tag> : <Tag color="purple">Yedek Avyonik Sistem</Tag> : ""}

                </div>


                <Col>
                    <Card title="X-Ekseni" bordered={false}>
                        {data != null ? data[8] : ""}
                    </Card>
                </Col>
                <Col>
                    <Card title="Y-Ekseni" bordered={false}>
                        {data != null ? data[9] : ""}
                    </Card>
                </Col>

                <Col>
                    <Card title="Z-Ekseni" bordered={false}>
                        {data != null ? data[9] : ""}
                    </Card>
                </Col>
            </Row >
            <div style={{ marginTop: '20px', paddingBottom: '50px' }}>
                <Row>
                    <Col>
                        <Card title="Basınç" bordered={false}>
                            {data != null ? data[3] : ""}
                        </Card>
                    </Col>
                    <Col>
                        <Card title="Sıcaklık" bordered={false}>
                            {data != null ? data[5] : ""}
                        </Card>
                    </Col>
                    <Col>
                        <Card title="Enlem" bordered={false}>
                            {data != null ? data[6] : ""}
                        </Card>
                    </Col>
                    <Col>
                        <Card title="Boylam" bordered={false}>
                            {data != null ? data[7] : ""}
                        </Card>
                    </Col>
                    <Col>
                        <Card title="İrtifa" bordered={false}>
                            {data != null ? data[4] : ""}
                        </Card>
                    </Col>


                </Row>


            </div>
            <div style={{ marginTop: '20px', paddingBottom: '50px' }}>
                <Row>

                    <Col>
                        <Card style={{ backgroundColor: "red" }} title="Drogue Parachute" bordered={false}>
                            {data != null ? "Deactive" : ""}
                        </Card>
                    </Col>
                    <Col>
                        <Card title="Main Parachute" bordered={false}>
                            {data != null ? "Active" : ""}
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ backgroundColor: "green" }} title="Payload Deployment" bordered={false}>
                            {data != null ? "Deactive" : ""}
                        </Card>
                    </Col>
                </Row>
            </div>
            <Steps style={{ paddingBottom: '50px' }} current={4} progressDot={customDot}>
                <Step title="Launch" description="" />
                <Step title="Burnout" description="" />
                <Step title="Apogee" description="" />
                <Step title="Drogue Parachute" description="" />
                <Step title="Payload Deployment" description="" />
                <Step title="Main Parachute" description="" />
                <Step title="Land off" description="" />
                <Step title="Rescue" description="" />
            </Steps>

        </div>



    )
}
