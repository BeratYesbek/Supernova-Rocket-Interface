import { Card, Tag } from 'antd'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from 'antd';
export default function GeneralInfo() {


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
                        <Tag color="magenta">Base Avionic System</Tag>

                    </Col>

                    <Col>
                        <h5 style={{ color: '#f0ad4e' }}>Number of Package</h5>
                        <Tag color="green">Current Package:  <strong>15</strong> </Tag>
                    </Col>
                </Row>

            </Card>

        </div >
    )

}