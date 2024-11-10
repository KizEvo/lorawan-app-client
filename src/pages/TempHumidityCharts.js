import { useFetchSensorData } from '../db/Database'

import React, { useEffect, useState } from 'react'
import LineChart from '../components/LineChart'

let first = false

const TempHumidityCharts = () => {
  const [sensorDataCache, fetchSensorData] = useFetchSensorData()

  const sensorTempValue = []
  const sensorHumidityValue = []
  sensorDataCache.forEach((inst) => {
    sensorTempValue.push(inst.data[2] + inst.data[3] / 10)
    sensorHumidityValue.push(inst.data[0] + inst.data[1] / 10)
  })

  const dataset = [
    {
      label: 'Temperature',
      data: sensorTempValue,
      backgroundColor: '#ff9d3b',
      borderColor: '#ff9d3b',
      pointBorderColor: 'black',
      pointBackgroundColor: 'black',
      tension: 0.4,
    },
    {
      label: 'Humidity',
      data: sensorHumidityValue,
      backgroundColor: '#2856ff',
      borderColor: '#2856ff',
      pointBorderColor: 'black',
      pointBackgroundColor: 'black',
      tension: 0.4,
    },
  ]

  useEffect(() => {
    fetchSensorData(1)

    const interval = setInterval(() => {
      fetchSensorData(1)
    }, 1000 * 60)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className='p-2 row'>
        <LineChart
          title='Temperature / Humidity LineChart'
          datasets={dataset}
          time_ms={
            sensorDataCache.length <= 0
              ? Date.now()
              : sensorDataCache[0].time_ms
          }
        />
        {sensorDataCache.length <= 0 && (
          <div className='p-2 row' style={{ fontSize: '2.1vmin' }}>
            <p>
              <b>[INFO]</b> Something wen't wrong while fetching the database
            </p>
            <ul>
              <li>Database could have exceeded the read/write limitation</li>
              <li>
                Mismatch timezone between Application server and Network server
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default TempHumidityCharts
