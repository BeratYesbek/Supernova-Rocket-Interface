import React, { useEffect, useState } from 'react'
import { Area } from '@ant-design/plots';
import { Container } from 'react-bootstrap';
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
            <h6>Altitude: 350</h6>

            <Area {...config} />
        </div>
    )
}
