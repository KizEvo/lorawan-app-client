import { useFetchSensorData } from '../db/Database'

import React from 'react'
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
  let currTime = Date.now()
  if (
    props.time_ms != 0 &&
    props.time_ms != null &&
    props.time_ms != undefined
  ) {
    currTime = props.time_ms
  }

  let formattedTimes = getFormattedTimes(1, 3, currTime)

  const data = {
    labels: formattedTimes,
    datasets: props.datasets ? props.datasets : [],
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
