import { useFetchSensorData } from '../db/Database'

import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Legend,
  Tooltip,
} from 'chart.js'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Legend,
  Tooltip
)

// Change input param to change timestamp of the sensor
const getFormattedTimes = (minInterval, size, currTime) => {
  const times = []
  for (let i = size - 1; i >= 1; i--) {
    times.push(currTime - 1000 * 60 * minInterval * i)
  }
  times.push(currTime)
  const tmpFormattedTimes = []
  for (let i = 0; i < size; i++) {
    tmpFormattedTimes.push(
      new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(times[i])
    )
  }
  return tmpFormattedTimes
}

const LineChart = (props) => {
  // const [formattedTimes, setFormattedTimes] = useState(getFormattedTimes(1, 3))
  const [sensorDataCache, fetchSensorData] = useFetchSensorData()
  console.log(sensorDataCache)
  let currTime = Date.now()
  if (sensorDataCache.length != 0) {
    currTime = sensorDataCache[sensorDataCache.length - 1].time
  }
  let formattedTimes = getFormattedTimes(1, 3, currTime)
  useEffect(() => {
    const interval = setInterval(() => {
      fetchSensorData()
    }, 1000 * 60)

    return () => clearInterval(interval)
  }, [])

  const sensorTempValue = []
  const sensorHumidityValue = []
  sensorDataCache.forEach((inst) => {
    sensorTempValue.push(inst.temperature)
    sensorHumidityValue.push(inst.humidity)
  })

  const data = {
    labels: formattedTimes,
    datasets: [
      {
        label: 'Temperature',
        data: sensorTempValue,
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'aqua',
        tension: 0.4,
      },
      {
        label: 'Humidity',
        data: sensorHumidityValue,
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'aqua',
        tension: 0.4,
      },
    ],
  }

  const options = {
    plugins: {
      legend: true,
      title: {
        display: true,
        text: props.title,
      },
    },
  }
  return <Line className='w-100 h-100' data={data} options={options}></Line>
}

export default LineChart
