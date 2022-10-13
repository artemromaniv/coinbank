import { useState,useEffect } from "react"
import { useGetCoinSupplyQuery } from "../services/cryptoApi"

interface SupplyProps {
  maxAmount:string,
  totalSyncedAt:string,
  totalAmount:string,
  circulatingSyncedAt:string,
  circulatingAmount:string
}

const CoinSupply = () => {
  const {data} = useGetCoinSupplyQuery(undefined,{})
  const [supply,setSupply] = useState<SupplyProps>()
  useEffect(() => {
    setSupply(data?.data?.supply)
    
  },[data])

  return (
    <div>
      <pre>
        {JSON.stringify(supply,null,4)}
      </pre>
    </div>
  )
}

export default CoinSupply