import React from 'react'
import { Gauge } from '@ant-design/plots';
export default function Temperature() {

    const config = {
        percent: 0.75,
        type: 'meter',
        innerRadius: 0.75,
        range: {
          ticks: [0, 1 / 3, 2 / 3, 1],
          color: ['#30BF78','#FAAD14','#F4664A']
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
              fontSize: '36px',
              lineHeight: '36px',
            },
          },
        },
      };

  return (
    <div>
        <Gauge {...config} />
    </div>
  )
}
