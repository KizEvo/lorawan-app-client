import React from 'react'

import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'
import StatusTable from '../components/StatusTable';

const sampleData = [
  {sensorNo: 1, sensorName: "Ultra Sonic (HC-SR04)", status: "Connected"},
  {sensorNo: 2, sensorName: "Temp-Humid (DHT11)", status: "Connected"},
  {sensorNo: 3, sensorName: "Water Level (WS-V1)", status: "Connected"},
  {sensorNo: 3, sensorName: "", status: "Unconnected"},
  {sensorNo: 5, sensorName: "", status: "Unconnected"},
];

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
        
        {/* <div className='col'>
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
        </div> */}
        <h2>System Report</h2>
        <div className='col'>
          <li className='py-2 small'>Current Sensor Address:</li>
          <li className='py-2 small'>Package Count:</li>
          <li className='py-2 small'>Timestamp:</li>
          <li className='py-2 small'>Sensor status:</li>
          <StatusTable data={sampleData} />
        </div>

      </div>
    </>
  )
}

export default Charts
