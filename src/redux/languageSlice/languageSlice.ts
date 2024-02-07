import {createSlice} from '@reduxjs/toolkit';
export interface LanguageState{
    lang:string
}
const initialState:LanguageState={
    lang:'EN'
}
export const languageSlice=createSlice({
    name:'language',
    initialState,
    reducers:{
        setEn:(state:LanguageState)=>{state.lang='EN'},
        setAr:(state:LanguageState)=>{state.lang='AR'}
    }
})
export const {setAr,setEn}=languageSlice.actions;