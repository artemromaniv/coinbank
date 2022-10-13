import { useState,useEffect } from "react"
import { useGetExchangesQuery } from "../services/cryptoApi"

const styles  = {
    wrapper:'w-full h-full',
    table_container:'overflow-y-auto',
    table_head:'flex flex-row',
    table_left_cols:'basis-1/2 inline-grid grid-cols-3 md:grid-cols-4 items-center',
    table_right_cols:'basis-1/2 inline-grid grid-cols-2 md:grid-cols-3 items-center',
    table_body:'border-b-2 border-b-crust p-2 py-3',
    table_row:'flex flex-row w-full',
    exchange_icon:'col-span-1 w-6 h-auto ',
    exchange_icon_container:'bg-white flex w-8 h-8 rounded-full items-center justify-center overflow-hidden',
    media_util:'hidden md:inline'
}

interface ExchangesData {
  uuid:string,
  name:string,
  iconUrl:string,
  recommended:boolean,
  rank:number,
  numberOfMarkets:number,
}

const Exchanges = () => {
  const [exchanges,setExchanges] = useState<ExchangesData[]>([])
  const {data,isLoading,error} = useGetExchangesQuery(undefined,{})
  useEffect(() => {
    setExchanges(data?.data?.exchanges)
  },[data])

  return (
    <>
      {error ? (<span>Can't receive data for some reason,can you check internet connection real quick?</span>) 
      : isLoading ? (<span>Loading stuff</span>) 
      : (<div className={styles.wrapper} >
          <div className={styles.table_container}>
            <div className="p-2">
              <ul className={styles.table_head}>
                <li className={styles.table_left_cols}>
                  <span>#</span>
                  <span>{' '}</span>
                  <span className={styles.media_util} >Name</span>
                  <span>{''}</span>
                </li>
                <li className = {styles.table_right_cols}>
                  <span>Markets</span>
                  <span className={styles.media_util} >Markets</span>
                  <span>Recommended</span>
                </li>
              </ul>
            </div>
            {exchanges?.map((exchange) => (
              <div key={exchange.uuid} className = {styles.table_body} >
                <ul className={styles.table_row}>
                  <li className={styles.table_left_cols}>
                    <span>{exchange.rank}</span>
                    <div className={styles.exchange_icon_container}>
                      <img src={exchange.iconUrl} alt="" className={styles.exchange_icon}/>
                    </div>
                    <span>{exchange.name}</span>
                    <span></span>
                  </li>
                  <li className={styles.table_right_cols}>
                    <span></span>
                    <span>{exchange.numberOfMarkets}</span>
                    <span>{exchange.recommended ? 'yes' : 'nope'}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
      </div>)}
    </>
  )
}

export default Exchanges