import {useState,useEffect} from 'react'
import { useGetCryptoCurrencyQuery } from '../services/cryptoApi'

const styles = {
  wrapper:'w-full h-full flex flex-row',
  table_container:'basis-3/5',
  banner_container:'basis-2/5'
}

interface Stats {
  totalCoins:number,
  totalMarkets:number,
  totalExchanges:number,
  totalMarketCap:string,
  total24hVolume:string
}

interface Currencies {
  uuid:string,
  name:string,
  symbol:string,
  iconUrl:string,
  price:string,
  rank:number,
  change:string
}

const Cryptocurrencies = () => {
  const [currencies,setCurrencies] = useState<Currencies[]>()
  const [stats,setStats] = useState<Stats>()
  const {data,error,isLoading} = useGetCryptoCurrencyQuery(50)
  
  useEffect(()=> {
    setCurrencies(data?.data?.coins)
    setStats(data?.data?.stats)
  },[data])

  return (
      <>
        {error ? (<h1>Something is horribly wrong </h1>) 
        : isLoading ? (<h1>I'm loading</h1>) : (
          <div className={styles.wrapper} >
            <div className={styles.table_container}>
              {currencies?.map((coin:any) => (
                <h1 key = {coin.uuid}>{coin.name}</h1>
              ))}
            </div>
            <div className={styles.banner_container}>
              <h1>{stats?.totalCoins}</h1>
              <h1>{stats?.totalMarkets}</h1>
              <h1>{stats?.totalExchanges}</h1>
              <h1>{stats?.totalMarketCap}</h1>
              <h1>{stats?.total24hVolume}</h1>
            </div>
          </div>
          )
        }
      </>
  )
}

export default Cryptocurrencies