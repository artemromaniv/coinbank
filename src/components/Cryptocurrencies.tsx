import React from 'react'
import { useGetCryptoCurrencyQuery } from '../services/cryptoApi'
const Cryptocurrencies = () => {

  const {data,error,isLoading} = useGetCryptoCurrencyQuery(50)
  
  return (
    <div>
      Cryptocurrencies
      <div>
        {error ? (
          <h1>Something is horribly wrong </h1>
        ) : isLoading ? (
          <h1>I'm loading</h1>
        ) : (
          <div>
            {data.data.coins?.map((coin:any) => (
              <h1 key = {coin.uuid}>{coin.name}</h1>
            ))}
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Cryptocurrencies