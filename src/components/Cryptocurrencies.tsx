import {useState,useEffect} from 'react'
import { useGetCryptoCurrencyQuery } from '../services/cryptoApi'

const styles = {
  wrapper:'w-full h-full flex flex-row',
  table_container:'basis-3/5 overflow-y-auto',
  banner_container:'basis-2/5',
  table:'min-w-full text-sm divide-y-2 divide-gray-200'
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
              <table>
                <thead>
                  <tr>
                    <th>

                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currencies?.map((coin:any) => (
                    <tr key = {coin.uuid}>
                      <td>{coin.rank}</td>
                      <td>{coin.name}</td>
                      {/* <td>
                        <img src={coin.iconUrl}></img>
                      </td> */}
                      <td>{coin.symbol}</td>
                      <td>{coin.price}</td>
                      <td>{coin.marketCap}</td>
                      <td>{coin.change}</td>
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