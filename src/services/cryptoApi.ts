import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    // When we bootstrap React App with create-react-app we use environment variables by typing: process.env,<VARIABLE_NAME>
    // but when we are using VIte build tool like in this project we do it with: import.meta.env.<VARIABLE_NAME>
    
    'x-rapidapi-host': import.meta.env.VITE_CRYPTO_RAPIDAPI_HOST ='coinranking1.p.rapidapi.com'
    ,
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
  };

const createRequest = (url:string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl: import.meta.env.VITE_CRYPTO_API_URL}),
    endpoints:(builder) => ({
        getCryptoCurrency:builder.query({
            query:(count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails:builder.query({
            query:(coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query:({coinId,timeperiod}) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`)
        }),
        getExchanges:builder.query({
            query:() => createRequest(`/exchanges`)
        })
    })
})

export const {
    useGetCryptoCurrencyQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery
} = cryptoApi