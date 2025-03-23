import React, { useEffect } from 'react'
import axios from 'axios'

import BarChart from '../components/BarChart'
import { useFetchSensorData } from '../db/Database'

const Analytic = () => {
  const [sensorDataCache, fetchSensorData] = useFetchSensorData()
  const [sensorMetadataCache, fetchSensorMetadata] = useFetchSensorData()

  const refreshTimeSec = 30
  const sensorDevAddr = new Set()
  const sensorMetadata = [[], []]

  sensorDataCache.forEach((inst) => {
    sensorDevAddr.add(inst.dev_addr)
  })

  sensorMetadataCache.forEach((doc) => {
    const data = doc.data()
    sensorMetadata[0].push(doc.id)
    sensorMetadata[1].push(data.package_count)
  })

  const handleOnClickEvent = (deviceAddress) => {
    if (!deviceAddress) {
      console.log('Cannot read NULL devicve address')
      return
    }
    axios
      .post(
        process.env.REACT_APP_NETWORK_SERVER_DOWNLINK_URL,
        {
          devaddr: `${deviceAddress}`,
          data: 'dev_tog',
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
    fetchSensorData(1, false)
    fetchSensorMetadata(1, true)

    const interval = setInterval(() => {
      fetchSensorData(1, false)
      fetchSensorMetadata(1, true)
    }, 1000 * refreshTimeSec)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='d-flex flex-lg-row flex-column p-2 row'>
      <div className='col'>
        <BarChart
          title='Sensors package counts chart'
          sensors={sensorMetadata}
        />
      </div>
      <div className='col'>
        <ul className='p-5 m-0 w-100 h-100 border'>
          <li className='py-2 small'>
            Status:
            <ul>
              {[...sensorDevAddr].map((element) => {
                return (
                  <li key={element}>
                    <p>Sensor {element} Connected</p>
                    <button
                      type='button'
                      className='btn btn-primary btn-sm'
                      onClick={(ev) => handleOnClickEvent(element)}
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
