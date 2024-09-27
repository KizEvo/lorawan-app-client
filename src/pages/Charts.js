import React from 'react'

import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'

const Charts = () => {
  return (
    <>
      <div className='p-2 row'>
        <LineChart title='Temperature/Humidity chart' />
      </div>
      <div className='d-flex flex-lg-row flex-column p-2 row'>
        <div className='col'>
          <BarChart title='Sensors package counts chart' />
        </div>
        <div className='col'>
          <ul className='p-5 m-0 w-100 h-100 border'>
            <li className='py-2 small'>Current Sensor Address:</li>
            <li className='py-2 small'>Package Count:</li>
            <li className='py-2 small'>Timestamp:</li>
            <li className='py-2 small'>
              Status:
              <ul>
                <li>Sensor 1 Connected</li>
                <li>Sensor 2 Connected</li>
                <li>Sensor 3 Connected</li>
                <li>Sensor 4 Connected</li>
                <li>Sensor 5 Connected</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Charts
