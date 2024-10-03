import React from 'react'

import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'
import StatusTable from '../components/StatusTable';
import SensorsStatus from '../db/SensorsStatus'

const Charts = () => {
  return (
    <section id="chart">
      <div className='p-2 row'>
        <LineChart title='Temperature/Humidity chart' />
      </div>
      <div className='d-flex flex-lg-row flex-column p-2 row'>
        <div className='col'>
          <BarChart title='Sensors package counts chart' />
        </div>
        <h2>System Report</h2>
        <div className='col'>
          <li className='py-2 small'>Current Sensor Address:</li>
          <li className='py-2 small'>Package Count:</li>
          <li className='py-2 small'>Timestamp:</li>
          <li className='py-2 small'>Sensor status:</li>
          <StatusTable data={SensorsStatus} />
        </div>
      </div>
    </section>
  )
}

export default Charts
