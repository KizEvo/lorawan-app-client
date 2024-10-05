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
    labels: ['Sensor_1', 'Sensor_2', 'Sensor_3', 'Sensor_4', 'Sensor_5'],
    datasets: [
      {
        label: 'Package count',
        backgroundColor: [
          '#3e95cd',
          '#8e5ea2',
          '#3cba9f',
          '#e8c3b9',
          '#c45850',
        ],
        data: [2478, 5267, 734, 784, 433],
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
