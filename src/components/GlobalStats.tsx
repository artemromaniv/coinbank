import { useEffect, useState } from "react"
import { useGetGlobalStatsQuery } from "../services/cryptoApi"

interface StatsType {
    totalCoins:number,
    totalMarkets:number
    totalMarketCap:number,
    total24hVolume:number
}

interface NewCoinType {
    uuid:string,
    symbol:string,
    name:string,
    iconUrl:string
}

const styles = {
    wrapper:'px-3',
    banner_header:'text-3xl font-bold',
    vertical_align:'flex flex-col gap-4',
    coin_icon:'col-span-1 w-8 h-auto ',
    coin_icon_container:'bg-white flex w-10 h-10 rounded-full items-center justify-center overflow-hidden',
}

const GlobalStats = () => {

    const {data, isLoading, error} = useGetGlobalStatsQuery(undefined,{})
    const [stats,setStats] = useState<StatsType>()
    const [newestCoins,setNewestCoins] = useState<NewCoinType[]>()

    useEffect(() => {
        setStats(data?.data)
        setNewestCoins(data?.data.newestCoins)
        console.log(stats);
        console.log(newestCoins);
        
        
    },[data])

  return (
    <div className={styles.wrapper}>
        <h1 className={styles.banner_header} >Cryptocurrencies</h1>
        <div className="mt-9 mb-9 grid grid-cols-2 gap-4 text-xl">
            <div className = {`${styles.vertical_align} `}>
                <span>Total coins</span>
                <span>{stats?.totalCoins}</span>               
            </div> 
            <div className = {`${styles.vertical_align}`}>
                <span>Total Markets</span>
                <span>{stats?.totalMarkets}</span>               
            </div>
            <div className = {`${styles.vertical_align} col-span-2`} >
                <span>Total market cap</span>
                <span>{stats?.totalMarketCap}</span>
            </div>
            <div className = {`${styles.vertical_align} col-span-2`} >
                <span>Total 24h volume</span>
                <span>{stats?.total24hVolume}</span> 
            </div>
        </div>
        <span className="font-bold text-2xl" >Newest coins</span>
        <div className="mt-9 grid grid-cols-1">
            {newestCoins?.map((newCoin) => (
                <div key={newCoin.uuid} className = 'flex items-center gap-6'>
                    <div className={styles.coin_icon_container} >
                        <img className={styles.coin_icon} src={newCoin.iconUrl} alt="" />
                    </div>
                    <span>{newCoin.symbol}</span>
                    <span>{newCoin.name}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default GlobalStats