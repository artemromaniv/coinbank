import {useState,useEffect} from 'react'
import { useGetCryptoCurrencyQuery } from '../services/cryptoApi'

const styles = {
  wrapper:'w-full h-full flex flex-col-reverse lg:flex-row md:flex-col-reverse ',
  table_container:'lg:basis-3/5 overflow-y-auto ',
  table_head:'flex flex-row',
  table_left_cols:'basis-1/2 inline-grid grid-cols-4 items-center',
  table_right_cols:'basis-1/2 inline-grid grid-cols-3 items-center',
  table_body:'bg-gray-900 mt-4 rounded-2xl p-2',
  table_row:'flex flex-row w-full',
  coin_icon:'w-8 h-8',
  banner_container:'lg:basis-2/5',

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
  marketCap:string,
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
              <div className='p-2'>
                <ul className={styles.table_head}>
                  <li className={styles.table_left_cols}>
                    <span>#</span>
                    <span>{' '}</span>
                    <span>Name</span>
                    <span>{''}</span>
                  </li>
                  <li className = {styles.table_right_cols}>
                    <span>Price</span>
                    <span>Market Cap</span>
                    <span>Change</span>
                  </li>
                </ul>
              </div>
              {currencies?.map((coin:Currencies) => (
                <div key={coin.uuid} className = {styles.table_body}>
                  <ul className={styles.table_row}>
                    <li className={styles.table_left_cols}>
                      <span>{coin.rank}.</span>
                      <img src={coin.iconUrl} alt={coin.symbol} className = {styles.coin_icon} />
                      <span>{coin.name}</span>
                      <span>{coin.symbol}</span>
                    </li>
                    <li className={styles.table_right_cols} >
                      <span>{coin.price}</span>
                      <span>{coin.marketCap}</span>
                      <span>{coin.change}</span>
                    </li>
                  </ul>
                </div>
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