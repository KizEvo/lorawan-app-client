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
    // sensors device addr
    labels: [...props.sensors[0]],
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
        data: [...props.sensors[1]],
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

  console.log(props.sensors)

  return <Bar className='w-100 h-100' data={data} options={options}></Bar>
}

export default BarChart
