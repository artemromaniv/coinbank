import { useGetCoinExchangesQuery } from "../services/cryptoApi"
import { useEffect,useState } from "react"
import millify from "millify"

const styles = {
  wrapper:'w-full h-full flex flex-col-reverse lg:flex-row md:flex-col-reverse ',
  table_container:'xl:basis-9/12 overflow-y-auto ',
  table_head:'flex flex-row',
  table_left_cols:'basis-1/2 inline-grid grid-cols-3 md:grid-cols-4 items-center',
  table_right_cols:'basis-1/2 inline-grid grid-cols-2 md:grid-cols-3 items-center',
  table_body:'hover:bg-crust border-b-2 border-b-crust p-2 py-3',
  table_row:'flex flex-row w-full',
  coin_icon:'col-span-1 w-6 h-auto ',
  coin_icon_container:'bg-white flex w-8 h-8 rounded-full items-center justify-center overflow-hidden',
  banner_container:'hidden xl:basis-3/12 xl:inline',
  media_util:'hidden xl:inline'
}

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
  },
  marketShare:string,
  price:number,
  recommended:boolean
}

const Exchanges = () => {

  const {data,isLoading,error} = useGetCoinExchangesQuery(undefined,{})
  const [exchanges,setExchanges] = useState<Exchanges[]>([])
  useEffect(() => {
    setExchanges(data?.data?.markets)
  },[data])
  return (
    <>
      {error ? (<span>No data for you</span>) 
      : isLoading ? (<span>Loading</span>) 
      : (
      <div className={styles.wrapper} >
        <div className={styles.table_container}>
          <div className='p-2'>
            <ul className={styles.table_head}>
              <li className={styles.table_left_cols}>
                <span>#</span>
                <span>{' '}</span>
                <span className={styles.media_util} >Exchange</span>
                <span>{''}</span>
              </li>
              <li className = {styles.table_right_cols}>
                <span>Base Price(USD)</span>
                <span className={styles.media_util} >Share</span>
                <span>recommended</span>
              </li>
            </ul>
          </div>
          {exchanges?.map((exchange_iten) => (
            <div key={exchange_iten.uuid} className = {styles.table_body} >
              <ul className={styles.table_row}>
                <li className={styles.table_left_cols}>
                  <span>{exchange_iten.rank}</span>
                  <div className={styles.coin_icon_container} >
                    <img src={exchange_iten.exchange.iconUrl} alt={''} className = {styles.coin_icon} />
                  </div>
                  <span>{exchange_iten.base.symbol} / {exchange_iten.quote.symbol}</span>
                </li>
                <li className={styles.table_right_cols}>
                  <span>{millify(exchange_iten.price)}</span>
                  <span>{exchange_iten.marketShare}%</span>
                  <span>{exchange_iten.recommended ? 'yes' : 'nope'}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.banner_container} >

        </div>
      </div>
      )}
    </>
  )
}

export default Exchanges