import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Legend,
  Tooltip,
  ArcElement,
} from 'chart.js'

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Legend,
  Tooltip
)

const PieChart = (props) => {
  const data = {
    labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
    datasets: [
      {
        label: 'Population (millions)',
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
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050',
    },
  }

  return (
    <Doughnut className='w-100 h-100' data={data} options={options}></Doughnut>
  )
}

export default PieChart
