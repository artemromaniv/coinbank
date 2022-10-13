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
    stats_card:'flex flex-col gap-4 bg-crust p-3 rounded-2xl',
    new_coin_card:'flex items-center gap-6 pl-8 py-3 bg-crust rounded-2xl',
    coin_icon:'col-span-1 w-8 h-auto ',
    coin_icon_container:'bg-white flex w-10 h-10 rounded-full items-center justify-center overflow-hidden',
}

const GlobalStats = () => {

    const {data} = useGetGlobalStatsQuery(undefined,{})
    const [stats,setStats] = useState<StatsType>()
    const [newestCoins,setNewestCoins] = useState<NewCoinType[]>()

    useEffect(() => {
        setStats(data?.data)
        setNewestCoins(data?.data.newestCoins)
    },[data])

  return (
    <div className={styles.wrapper}>
        <h1 className={styles.banner_header} >Cryptocurrencies</h1>
        <div className="mt-9 mb-9 grid grid-cols-2 gap-4 text-xl font-bold text-txt">
            <div className = {`${styles.stats_card}`}>
                <span>Total coins</span>
                <span>{stats?.totalCoins}</span>               
            </div> 
            <div className = {`${styles.stats_card}`}>
                <span>Total Markets</span>
                <span>{stats?.totalMarkets}</span>               
            </div>
            <div className = {`${styles.stats_card} col-span-2`} >
                <span>Total market cap</span>
                <span>{stats?.totalMarketCap}</span>
            </div>
            <div className = {`${styles.stats_card} col-span-2`} >
                <span>Total 24h volume</span>
                <span>{stats?.total24hVolume}</span> 
            </div>
        </div>
        <span className="font-bold text-2xl" >Newest coins</span>
        <div className="mt-9 grid grid-cols-1 gap-8 font-bold text-txt">
            {newestCoins?.map((newCoin) => (
                <div key={newCoin.uuid} className = {styles.new_coin_card}>
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