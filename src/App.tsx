import React, { useState } from 'react';
import './App.css';
import { useGetCovidQuery } from './redux/api/apiSlice';
import Navbar from './components/Navbar/Navbar';
import { registerCharts } from './registerChart';
import ShowBar from './components/ShowBar/ShowBar';
import { useSelector } from 'react-redux';


function App() {
  const language=useSelector((state:any)=>state.langReducer.lang);
  console.log(language);
  const [mode,setMode]=useState('light');
  const {data:covid=[],isLoading,isSuccess}=useGetCovidQuery('');
registerCharts();
  return (
    <div className={`container ${mode}`}>
      <Navbar setMode={setMode}/>
      {
        isSuccess&&(
          <ShowBar barCharData={covid}/>
        )
      }
  
    </div>

  );
}

export default App;
