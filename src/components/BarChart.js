import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Legend,
  Tooltip,
} from 'chart.js'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Legend,
  Tooltip
)

const BarChart = (props) => {
  const data = {
    labels: ['Sensor 1', 'Sensor 2', 'Sensor 3', 'Sensor 4', 'Sensor 5'],
    datasets: [
      {
        label: 'Package count',
        backgroundColor: [
          '#966a30',
          '#b07c38',
          '#cc8f41',
          '#eba54b',
          '#ffb351',
        ],
        data: [2478, 5267, 3562, 784, 433],
      },
    ],
  }

  const options = {
    legend: true,
    plugins: {
      legend: true,
      title: {
        display: true,
        text: props.title,
      },
    },
  }
  return <Bar className='w-100 h-100' data={data} options={options}></Bar>
}

export default BarChart
