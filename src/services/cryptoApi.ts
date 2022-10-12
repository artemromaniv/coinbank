import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// When we bootstrap React App with create-react-app we use environment variables by typing: process.env,<VARIABLE_NAME>
// but when we are using VIte build tool like in this project we do it with: import.meta.env.<VARIABLE_NAME>
const api_key = import.meta.env.VITE_RAPIDAPI_KEY
const base_url = import.meta.env.VITE_CRYPTO_API_URL
const api_host = import.meta.env.VITE_CRYPTO_RAPIDAPI_HOST
 
const cryptoApiHeaders = {
    
    'x-rapidapi-host': api_host
    ,
    'x-rapidapi-key': api_key,
  };

const createRequest = (url:string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl:base_url}),
    endpoints:(builder) => ({
        getCryptoCurrency:builder.query({
            query:(count) => createRequest(`coins?limit=${count}`)
        }),
        getCryptoDetails:builder.query({
            query:(coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query:({coinId,timeperiod}) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`)
        }),
        getExchanges:builder.query({
            query:() => createRequest(`/coin/Qwsogvtv82FCd/exchanges`)
        }),
        getGlobalStats:builder.query({
            query:() => createRequest(`/stats`)
        })
    }),
})

export const {
    useGetCryptoCurrencyQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery,
    useGetGlobalStatsQuery
} = cryptoApi