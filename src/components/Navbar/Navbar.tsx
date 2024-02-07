import React, { useRef } from 'react';
import './Navbar.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setAr, setEn } from '../../redux/languageSlice/languageSlice';
import { navbarLabels } from './navbarLabels';
const Navbar=({setMode}:{setMode:any})=>{
    const language:'AR'|'EN'=useSelector((state:any)=>state.langReducer.lang);
    const dispatch=useDispatch();
    const setEnglish=()=>{
      dispatch(setEn());
      document.documentElement.setAttribute("dir", "ltr");
      hideList();
    }
    const setArabic=()=>{
      dispatch(setAr());
   
       
        document.documentElement.setAttribute("dir", "rtl");
       hideList();
    }
    const labelsNav=navbarLabels[language];
    console.log(labelsNav);
    const langref=useRef<HTMLLIElement>(null);
    const modeRef=useRef<HTMLLIElement>(null);
    const showList=()=>{
        langref.current?.classList.add('showList');
    }
    const hideList=()=>{
        langref.current?.classList.remove('showList');
    }


    const showModeList=()=>{
        modeRef.current?.classList.add('showModeList');
    }
    const hideModeList=()=>{
        modeRef.current?.classList.remove('showModeList');
    }

    return(
        <div className="navbar">
            <ul className="menu">
                <li className='language' ref={langref} onMouseOver={showList} onMouseOut={hideList}>
                    <button>{labelsNav.first.lab}</button>
                    <ul className='lang'>
                        <li onClick={setEnglish}>{labelsNav.first.first}</li>
                        <li onClick={setArabic}>{labelsNav.first.second}</li>
                    </ul>
                    
                </li>
                <li className='modelight' ref={modeRef} onMouseOver={showModeList} onMouseOut={hideModeList}>
                    <button> {labelsNav.second.lab}</button>
                    <ul className='mode'>
                        <li onClick={()=>setMode('light')}>{labelsNav.second.first}</li>
                        <li onClick={()=>setMode('dark')}>{labelsNav.second.second}</li>
                    </ul>
                    </li>
            </ul>
        </div>
    )
}
export default Navbar;