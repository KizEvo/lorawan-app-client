import React from 'react'

import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'

const Charts = () => {
  return (
    <>
      <div class='p-2 row'>
        <LineChart title='Temperature/Humidity chart' />
      </div>
      <div class='d-flex flex-lg-row flex-column p-2 row'>
        <div class='col'>
          <BarChart title='Sensors package counts chart' />
        </div>
        <div class='col'>
          <ul class='p-5 m-0 w-100 h-100 border'>
            <li class='py-2 small'>Current Sensor Address:</li>
            <li class='py-2 small'>Package Count:</li>
            <li class='py-2 small'>Timestamp:</li>
            <li class='py-2 small'>
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
