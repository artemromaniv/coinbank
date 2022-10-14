import { useState,useEffect } from "react"
import { useGetCoinSupplyQuery } from "../services/cryptoApi"
import StatsBanner from "./StatsBanner"

const styles = {
  wrapper:'px-3',
  banner_header:'text-3xl font-bold',
}

interface SupplyProps {
  maxAmount:string,
  totalSyncedAt:string,
  totalAmount:string,
  circulatingSyncedAt:string,
  circulatingAmount:string
}

interface ComponentProps {
  totalBTCMarkets?:number,
}

const CoinSupply = ({totalBTCMarkets}:ComponentProps) => {
  const {data} = useGetCoinSupplyQuery(undefined,{})
  const [supply,setSupply] = useState<SupplyProps>()
  useEffect(() => {
    setSupply(data?.data?.supply)
    
  },[data])

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.banner_header}>BTC Markets</h1>
      <StatsBanner
        left_top_header='BTC Markets'
        left_top_content={totalBTCMarkets}
        right_top_header = 'BTC Supply'
        right_top_content={supply?.maxAmount}
        top_row_header = 'Circulating Amount'
        top_row_content={supply?.circulatingAmount}
        btm_row_header = 'Total synced at'
        btm_row_content={supply?.totalSyncedAt}
      />
    </div>
  )
}

export default CoinSupply