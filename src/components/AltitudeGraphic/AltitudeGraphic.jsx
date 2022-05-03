import React, { useEffect, useState } from 'react'
import { Area } from '@ant-design/plots';
import { Container } from 'react-bootstrap';
import { Card } from 'antd';
export default function AltitudeGraphic() {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
            .then((response) => response.json())
            .then((json) => { console.log(json); setData(json) })
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
            range: [0, 1],
        },
    };
    return (
        <div>
            <Card headStyle={{ backgroundColor: '#2B3034', color: '#ffffff' }}
                bordered={false}
                title="Pressure"
                style={{ marginBottom: '10px', marginTop: '10px' }}
                class='Card'
                bodyStyle={{ backgroundColor: '#31363C' }}>
                <h6>Altitude: 350</h6>

                <Area {...config} />
            </Card>

        </div >
    )
}

//#343C40
//#