import React, { useEffect } from 'react'
import axios from 'axios'

import BarChart from '../components/BarChart'
import { useFetchSensorData } from '../db/Database'

const Analytic = () => {
  const [sensorDataCache, fetchSensorData] = useFetchSensorData()

  const sensorDevAddr = []

  sensorDataCache.forEach((inst) => {
    console.log(inst)
    sensorDevAddr.push(inst.dev_addr)
  })

  const handleOnClickEvent = (deviceAddress) => {
    if (!deviceAddress) {
      console.log('Cannot read NULL devicve address')
      return
    }
    axios
      .post(
        process.env.REACT_APP_FB_MEASUREMENT_ID,
        {
          devaddr: `${deviceAddress}`,
          data: `dev_tog`,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then(() => {
        console.log(`Sent command to device ${deviceAddress}`)
      })
      .catch((error) => {
        console.log(
          `Error while trying to send cmd to device ${deviceAddress}, ${error.message}`
        )
      })
  }

  useEffect(() => {
    fetchSensorData(1)

    const interval = setInterval(() => {
      fetchSensorData(1)
    }, 1000 * 60)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='d-flex flex-lg-row flex-column p-2 row'>
      <div className='col'>
        <BarChart title='Sensors package counts chart' />
      </div>
      <div className='col'>
        <ul className='p-5 m-0 w-100 h-100 border'>
          <li className='py-2 small'>
            Status:
            <ul>
              {sensorDevAddr.map((element) => {
                return (
                  <li>
                    <p>Sensor 1 Connected</p>
                    <button
                      type='button'
                      className='btn btn-primary btn-sm'
                      onClick={(ev) => handleOnClickEvent(null)}
                    >
                      Toggle State
                    </button>
                  </li>
                )
              })}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Analytic
