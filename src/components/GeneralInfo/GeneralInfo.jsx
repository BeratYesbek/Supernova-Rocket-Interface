import { Card, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from 'antd';
export default function GeneralInfo(props) {

    const [propData, setPropData] = useState(null);

    useEffect(() => {
        if (props.value != null) {
            setPropData(props.value.data)
        }
    })

    return (
        <div>
            <Card title="General Informations"
                headStyle={{ backgroundColor: '#2B3034', color: '#ffffff' }}
                bodyStyle={{ backgroundColor: '#31363C' }}
                bordered={false}
                style={{ marginBottom: '10px', marginTop: '10px' }}>

                <Row>
                    <Col>
                        <h5 style={{ color: '#f0ad4e' }}>Avionic System</h5>
                        {propData != null ? (propData[0].split("@")[1] === "0" ? <Tag color="magenta">Base Avionic System</Tag> : <Tag color="cyan">Backup Avionic System</Tag>) : null}

                    </Col>

                    <Col>
                        <h5 style={{ color: '#f0ad4e' }}>Number of Package</h5>
                        <Tag color="green">Current Package:  <strong>{propData != null ? propData[1] : 0 }</strong> </Tag>
                    </Col>
                </Row>

            </Card>

        </div >
    )

}