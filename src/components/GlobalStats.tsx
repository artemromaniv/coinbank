import { useEffect, useState } from "react"
import { useGetGlobalStatsQuery } from "../services/cryptoApi"

interface StatsType {
    totalCoins:number,
    totalMarkets:number
    totalMarketCap:number,
    total24hVolume:number
}

const styles = {
    wrapper:' mt-9 px-3',
    vertical_align:'flex flex-col gap-4'
}

const GlobalStats = () => {

    const {data, isLoading, error} = useGetGlobalStatsQuery(undefined,{})
    const [stats,setStats] = useState<StatsType>()

    useEffect(() => {
        setStats(data?.data)
        console.log(stats);
        
    },[data])

  return (
    <div className={styles.wrapper}>
        <div className="grid grid-cols-2 gap-4 text-xl">
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
    </div>
  )
}

export default GlobalStats