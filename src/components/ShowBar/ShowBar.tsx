import React from "react";
import { useState } from "react";
import CovidChart from "../CovidChart";
import { useSelector } from "react-redux";
import { settingChart } from "./settingChart";

const ShowBar=({barCharData}:{barCharData:any})=>{
const language:'AR'| 'EN'=useSelector((state:any)=>state.langReducer.lang);
const settingLabels=settingChart[language];


    let ob=barCharData[0];
    let arr:Array<any>=[];
    for(let k in ob){
      arr.push(k);
    }
    const [checkedState, setCheckedState] = useState(
        new Array(arr.length).fill(false)
      );
    const[labels,setLabels]=useState();
    const[labelNotInData,setLabelNotInData]=useState(String);
    const[label,setLabel]=useState('');
    const[barBackground,setBarBackground]=useState('');
    const[barBorderColor,setBarBorderColor]=useState('');
    const[barData,setBarData]=useState();
    const[barRadius,setBarRadius]=useState(30);
    const [chartDataset,setChartDataset]=useState([{}]);
   
    const chartData={
      labels:labels,
      datasets:chartDataset,
    }
    console.log(chartDataset)
    const onLabelsChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        setLabelNotInData(e.target.value);
    setLabels(barCharData.map((m:any)=>m[e.target.value]));

    
    }
    const [titleText,setTitleText]=useState('covid 19');
    const [titlePosition,setTitlePosition]=useState('top');
    const [titleColor,setTitleColor]=useState('red');
    const [titleFontWeight,setTitleFontWeight]=useState('');
    const [titleFontSize,setTitleFontSize]=useState(20);
    const [tooltipShow,setTooltipShow]=useState(false);
    const [tooltipBackground,setTooltipBackground]=useState('rgb(132,240,179)');
    const [tooltipPosition,setTooltipPosition]=useState('average');
    const [tooltipTitleColor,setTooltipTitleColor]=useState('white');
    const [tooltipBodyColor,setTooltipBodyColor]=useState('white');
    const [tooltipFooterColor,setTooltipFooterColor]=useState('white');
    
    const option={
      responsive:true,
      plugins:{
        title:{
          display:true,
          text:titleText,
          position:titlePosition,
          color:titleColor,
          font:{
            weight:titleFontWeight,
            size:titleFontSize,
          }
        },
        tooltip:{
          enabled:tooltipShow,
          backgroundColor:tooltipBackground,
          position:tooltipPosition,
          titleColor:tooltipTitleColor,
          bodyColor:tooltipBodyColor,
          footerColor:tooltipFooterColor,
        }
      }
    }
    return(
        <div>
<div className='secondaryContainer'>
<div className='setting'>
  <h3>{settingLabels.title.title}</h3>
  <div className='title'>
    <input type='text'
     placeholder={settingLabels.title.text}
     onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setTitleText(e.target.value)}
      />
      <select onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>setTitlePosition(e.target.value)}>
        <option value='top'>{settingLabels.title.position.top}</option>
        <option value='left'>{settingLabels.title.position.left}</option>
        <option value='bottom'>{settingLabels.title.position.bottom}</option>
        <option value='right'>{settingLabels.title.position.right}</option>
      </select>
      <input type='color'
       className='colorInput'
       onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setTitleColor(e.target.value)}
       />
       <input type='number'
        min={16}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setTitleFontSize(Number(e.target.value))}
        />
        <select onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>setTitleFontWeight(e.target.value)}>
          <option value='normal'>{settingLabels.title.weight.normal}</option>
          <option value='lighter'>{settingLabels.title.weight.light}</option>
          <option value='bold'>{settingLabels.title.weight.bold}</option>
          <option value='bolder'>{settingLabels.title.weight.bolder}</option>
        </select>
  </div>
  <h3>{settingLabels.data.title}</h3>
  <div className='labels'>
    <label>{settingLabels.data.labels}</label>
    <select onChange={onLabelsChange}>
      <option></option>
    {
      arr.map((c:any)=>{
        return(
          <option value={c}>{c}</option>
        )
      })
     }
    </select>
    <label>{settingLabels.data.data}</label>
{

  arr.map((r:string,index)=>{
    if(r!==labelNotInData){
      return(
        <div>
          {r}
        <input type='radio'
        value={r}
        name="dataset"
   
        onChange={()=>{
            
            setChartDataset(
              [
              
                        {
                            label:r,
                            backgroundColor:`rgb(255,${index*50},1${index}20)`,
                            data:barCharData.map((k:any)=>k[r]),
                        }
                  
                    ]
                  
                
            
            )
        }}
      
         
        />
        </div>
        )
    }
  
  })
}
  </div>
  <h3>{settingLabels.tooltip.title} </h3>
  <div className="tooltip">
    <label>{settingLabels.tooltip.show}</label>
    <input type="checkbox" onChange={()=>setTooltipShow(!tooltipShow)} />
    <label>{settingLabels.tooltip.background}</label>
    <input type="color"
     className="colorInput"
     onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setTooltipBackground(e.target.value)}
     />
     <label>{settingLabels.tooltip.position.title}</label>
     <select onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>setTitlePosition(e.target.value)}>
      <option value='average'>{settingLabels.tooltip.position.average}</option>
      <option value='nearest'>{settingLabels.tooltip.position.nearest}</option>
     </select>
     <label>{settingLabels.tooltip.color.title}</label>
     <input type="color"
     className="colorInput"
     onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setTooltipTitleColor(e.target.value)}
     />

<label>{settingLabels.tooltip.color.body}</label>
     <input type="color"
     className="colorInput"
     onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setTooltipBodyColor(e.target.value)}
     />
       <label>{settingLabels.tooltip.color.footer}</label>
     <input type="color"
     className="colorInput"
     onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setTooltipFooterColor(e.target.value)}
     />
  </div>
</div>
<div className='chartContainer'>
<CovidChart chartData={chartData} chartOption={option}/>
</div>
</div>
    
  

        </div>
    )
}
export default ShowBar;