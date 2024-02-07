import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const apiSlice=createApi({
reducerPath:'api',
baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000'}),
tagTypes:['Covid'],
endpoints:builder=>({
    getCovid:builder.query({
        query:lang=>({
            url:'/covid19',
            method:'GET',
        }),
        providesTags:['Covid']
        
    })
})
})
export const {useGetCovidQuery}=apiSlice;