import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
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