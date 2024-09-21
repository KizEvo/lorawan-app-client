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

const LineChart = (props) => {
  const currTime = Date.now()
  const times = []

  for (let i = 3 - 1; i >= 1; i--) {
    times.push(currTime - 1000 * 60 * 5 * i)
  }
  times.push(currTime)

  const formattedTimes = []

  for (let i = 0; i < 3; i++) {
    formattedTimes.push(
      new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(times[i])
    )
  }

  const data = {
    labels: formattedTimes,
    datasets: [
      {
        label: 'Temperature',
        data: [8, 2, 10],
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'aqua',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Humidity',
        data: [2, 10, 5],
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'aqua',
        fill: true,
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
  return <Line class='w-100 h-100' data={data} options={options}></Line>
}

export default LineChart
