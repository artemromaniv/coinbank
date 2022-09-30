import {useState,useEffect} from 'react'
import { useGetCryptoCurrencyQuery } from '../services/cryptoApi'

const styles = {
  wrapper:'w-full h-full flex flex-col lg:flex-row md:flex-col',
  table_container:'basis-3/5 overflow-y-auto',
  table:'min-w-full text-sm  ',
  table_head:'px-4 py-2 font-medium text-left text-white whitespace-nowrap',
  table_body:'divide-gray-200"',
  table_icon:'px-4 py-2 text-white whitespace-nowrap w-4 h-4',
  table_div:'px-4 py-2 text-white whitespace-nowrap',
  banner_container:'basis-2/5',

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
              <table className={styles.table}>
                <thead>
                  <tr className='items-center'>
                    <th className={styles.table_head} >#</th>
                    <th className={styles.table_head} >icon</th>
                    <th className={styles.table_head}>Name</th>
                    <th className={styles.table_head}>Symbol</th>
                    <th className={styles.table_head}>Price</th>
                    <th className={styles.table_head}>Market Cap</th>
                    <th className={styles.table_head}>Change</th>
                  </tr>
                </thead>
                <tbody className={styles.table_body} >
                  {currencies?.map((coin:any) => (
                    <tr key = {coin.uuid}>
                        <td className={styles.table_div} >{coin.rank}</td>
                        <td className={styles.table_icon}>
                          <img src={coin.iconUrl}></img>
                        </td>
                        <td className={styles.table_div} >{coin.name}</td>
                        <td className={styles.table_div} >{coin.symbol}</td>
                        <td className={styles.table_div} >{coin.price}</td>
                        <td className={styles.table_div} >{coin.marketCap}</td>
                        <td className={styles.table_div} >{coin.change}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

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