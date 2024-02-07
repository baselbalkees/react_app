import { Bar } from "react-chartjs-2"

const CovidChart=({chartData,chartOption}:{chartData:any,chartOption:any})=>{
    return(
<div className="graphic">
       <Bar data={chartData} options={chartOption}/>
   </div>
    )
}
export default CovidChart