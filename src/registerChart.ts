import {  ArcElement,
    BarElement,
    CategoryScale,
    Chart,
    Filler,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    RadialLinearScale,
    LogarithmicScale,
    Title,
    Tooltip,} from 'chart.js'

    export const registerCharts = () => {
        Chart.register(
          ArcElement,
          BarElement,
          CategoryScale,
          Legend,
          LineElement,
          LinearScale,
          PointElement,
          Title,
          Tooltip,
          RadialLinearScale,
          LogarithmicScale,
          Filler
        )
      }