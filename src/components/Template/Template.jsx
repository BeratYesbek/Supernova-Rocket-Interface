import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Template(props) {

    const [data, setData] = useState(null);
    useEffect(() => {
        setData(props.value.data)
    }, [props])

    return (
        <Row>
            <Col>
                <h6>X</h6>
                {data != null ? data[8] : ""}
            </Col>
            <Col>
                <h6>Y</h6>
                {data != null ? data[9] : ""}
            </Col>
            <Col>
                <h6>Z</h6>
                {data != null ? data[10] : ""}
            </Col>
            <Col>
                <h6>Basınç</h6>
                {data != null ? data[3] : ""}
            </Col>
            <Col>
                <h6>Sıcaklık</h6>
                {data != null ? data[5] : ""}
            </Col>
            <Col>
                <h6>Enlem</h6>
                {data != null ? data[6] : ""}
            </Col>
            <Col>
                <h6>Boylam</h6>
                {data != null ? data[7] : ""}
            </Col>
            <Col>
                <h6>İrtifa</h6>
                {data != null ? data[4] : ""}
            </Col>
        </Row>
    )
}
