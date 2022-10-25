import millify from "millify";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetCryptoCurrencyQuery } from "../services/cryptoApi";
import GlobalStats from "./GlobalStats";
const styles = {
  wrapper:
    "w-full h-full flex flex-col-reverse lg:flex-row md:flex-col-reverse overflow-y-auto",
  table_container: "basis-11/12  xl:basis-9/12 md:overflow-y-auto ",
  table_head: "flex flex-row",
  table_left_cols:
    "basis-1/2 inline-grid grid-cols-3 md:grid-cols-4 items-center",
  table_right_cols:
    "basis-1/2 inline-grid grid-cols-2 md:grid-cols-3 items-center",
  table_body: "hover:bg-crust border-b-2 border-b-crust p-2 py-3",
  table_row: "flex flex-row w-full",
  coin_icon: "col-span-1 w-6 h-auto ",
  coin_icon_container:
    "bg-white flex w-8 h-8 rounded-full items-center justify-center overflow-hidden",
  banner_container: "xl:basis-3/12",
  media_util: "hidden md:inline",
};

interface Currencies {
  uuid: string;
  name: string;
  symbol: string;
  iconUrl: string;
  marketCap: number;
  price: number;
  rank: number;
  change: number;
}

const Cryptocurrencies = () => {
  const [currencies, setCurrencies] = useState<Currencies[]>();
  // const [stats,setStats] = useState<Stats>()
  const { data, error, isLoading } = useGetCryptoCurrencyQuery(100);

  useEffect(() => {
    setCurrencies(data?.data?.coins);
  }, [data]);

  return (
    <>
      {error ? (
        <h1>Couldn't receive data,please check your internet connection</h1>
      ) : isLoading ? (
        <h1>Loading coins data</h1>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.table_container}>
            <div className="p-2">
              <ul className={styles.table_head}>
                <li className={styles.table_left_cols}>
                  <span>#</span>
                  <span> </span>
                  <span className={styles.media_util}>Name</span>
                  <span>{""}</span>
                </li>
                <li className={styles.table_right_cols}>
                  <span>Price(USD)</span>
                  <span className={styles.media_util}>Market Cap</span>
                  <span>Change</span>
                </li>
              </ul>
            </div>
            {currencies?.map((coin: Currencies) => (
              <div key={coin.uuid} className={styles.table_body}>
                <Link to={`crypto/${coin.uuid}`}>
                  <ul className={styles.table_row}>
                    <li className={styles.table_left_cols}>
                      <span>{coin.rank}.</span>
                      <div className={styles.coin_icon_container}>
                        <img
                          src={coin.iconUrl}
                          alt={coin.symbol}
                          className={styles.coin_icon}
                        />
                      </div>
                      <span className={styles.media_util}>{coin.name}</span>
                      <span>{coin.symbol}</span>
                    </li>
                    <li className={styles.table_right_cols}>
                      <span>{millify(coin.price)}</span>
                      <span className={styles.media_util}>
                        {millify(coin.marketCap)}
                      </span>
                      <span
                        className={coin.change < 0 ? "text-red" : "text-green"}
                      >
                        {" "}
                        {coin.change > 0 ? "▲" : "▼"} {Math.abs(coin.change)}
                      </span>
                    </li>
                  </ul>
                </Link>
              </div>
            ))}
          </div>
          <div className={styles.banner_container}>
            <GlobalStats />
          </div>
        </div>
      )}
    </>
  );
};

export default Cryptocurrencies;
