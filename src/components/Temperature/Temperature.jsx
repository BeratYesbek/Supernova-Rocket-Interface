import React, { useEffect, useState } from 'react'
import { Gauge } from '@ant-design/plots';
import { Card } from 'antd';
export default function Temperature(props) {

  const [data, setData] = useState(null);

  useEffect(() => {
    if(props.value != null){
      setData(props.value.data)
    }
  },[props])

  const config = {
    percent: [data != null ? parseInt(data[7]) / 100 : 0],
    type: 'meter',
    innerRadius: 0.85,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ['#30BF78', '#FAAD14', '#F4664A']
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    statistic: {
      content: {
        style: {
          color: '#f0ad4e',
          fontSize: '20px',
          lineHeight: '20px',
        },
      },
    },
  };

  return (
    <div>
      <Card title="Temperatures"
        headStyle={{ backgroundColor: '#2B3034', color: '#ffffff' }}
        bodyStyle={{ backgroundColor: '#31363C' }}
        bordered={false}
        style={{ marginBottom: '10px', marginTop: '10px' }}


      >
        <Gauge  {...config} />
      </Card>
    </div>
  )
}
