import {configureStore} from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import { languageSlice } from './languageSlice/languageSlice'
export const store=configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        langReducer:languageSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})