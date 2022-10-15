import { useGetCoinExchangesQuery } from "../services/cryptoApi"
import { useEffect,useState } from "react"

interface Exchanges {
  rank:number,
  uuid:string,
  base:{
    uuid:string,
    symbol:string
  },
  quote:{
    uuid:string,
    symbol:string
  },
  exchange:{
    name:string,
    iconUrl:string
  }
  
}

const Exchanges = () => {

  const {data,isLoading,error} = useGetCoinExchangesQuery(undefined,{})
  const [exchanges,setExchanges] = useState([])
  useEffect(() => {
    setExchanges(data?.data?.markets)
  },[data])
  return (
    <>
      {error ? (<span>No data for you</span>) 
      : isLoading ? (<span>Loading</span>) 
      : (
      <div>
        <pre>
          {JSON.stringify(exchanges,null ,4)}
        </pre>
      </div>
      )}
    </>
  )
}

export default Exchanges