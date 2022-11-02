import { useState, useEffect } from "react";
import { useGetCoinMarketsQuery } from "../services/cryptoApi";

const styles = {
  wrapper:"w-full h-full flex flex-col",
  table_container: "xl:overflow-y-auto",
  table_head: "flex flex-row",
  table_left_cols:"basis-1/2 inline-grid grid-cols-3 md:grid-cols-4 items-center",
  table_right_cols:"basis-1/2 inline-grid grid-cols-2 md:grid-cols-3 items-center",
  table_body: "border-b-2 border-b-crust p-2 py-3",
  table_row: "flex flex-row w-full",
  market_icon: "col-span-1 w-6 h-auto ",
  market_icon_container:"bg-white flex w-8 h-8 rounded-full items-center justify-center overflow-hidden",
  banner_container: " xl:basis-3/12",
  media_util: "hidden md:inline",
};

interface MarketsData {
  uuid: string;
  name: string;
  iconUrl: string;
  recommended: boolean;
  rank: number;
  numberOfMarkets: number;
}

interface Stats {
  total: number;
}

const Markets = () => {
  const [Markets, setMarkets] = useState<MarketsData[]>([]);
  const [stats, setStats] = useState<Stats>();
  const { data, isLoading, error } = useGetCoinMarketsQuery(undefined, {});
  useEffect(() => {
    setMarkets(data?.data?.exchanges);
    setStats(data?.data?.stats);
  }, [data]);

  return (
    <>
      {error ? (
        <span>
          Can't receive data for some reason,can you check internet connection
          real quick?
        </span>
      ) : isLoading ? (
        <span>Loading stuff</span>
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
                  <span className={styles.media_util}>Markets</span>
                  <span>Recommended</span>
                </li>
              </ul>
            </div>
            {Markets?.map((market_data) => (
              <div key={market_data.uuid} className={styles.table_body}>
                <ul className={styles.table_row}>
                  <li className={styles.table_left_cols}>
                    <span>{market_data.rank}</span>
                    <div className={styles.market_icon_container}>
                      <img
                        src={market_data.iconUrl}
                        alt=""
                        className={styles.market_icon}
                      />
                    </div>
                    <span>{market_data.name}</span>
                    <span></span>
                  </li>
                  <li className={styles.table_right_cols}>
                    <span>{market_data.numberOfMarkets}</span>
                    <span>{market_data.recommended ? "yes" : "nope"}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Markets;
