import { useEffect, useState } from "react";
import { useGetGlobalStatsQuery } from "../services/cryptoApi";
import StatsBanner from "./UI/StatsBanner";

interface StatsType {
  totalCoins: number;
  totalMarkets: number;
  totalMarketCap: number;
  total24hVolume: number;
}

interface NewCoinType {
  uuid: string;
  symbol: string;
  name: string;
  iconUrl: string;
}

const styles = {
  wrapper: "",
  banner_header: "hidden md:inline text-3xl font-bold",
  stats_card: "flex flex-col gap-4 bg-crust p-3 rounded-2xl",
  new_coin_container:
    "hidden md:inline mt-9 grid grid-cols-1 gap-8 font-bold text-txt",
  new_coin_card: "flex items-center gap-6 pl-8 py-3 bg-crust rounded-2xl",
  coin_icon: "col-span-1 w-8 h-auto ",
  coin_icon_container:
    "bg-white flex w-10 h-10 rounded-full items-center justify-center overflow-hidden",
};

const GlobalStats = () => {
  const { data } = useGetGlobalStatsQuery(undefined, {});
  const [stats, setStats] = useState<StatsType>();
  const [newestCoins, setNewestCoins] = useState<NewCoinType[]>();

  useEffect(() => {
    setStats(data?.data);
    setNewestCoins(data?.data.newestCoins);
  }, [data]);

  return (
    <div className={styles.wrapper}>
      {/* <h1 className={styles.banner_header}>Cryptocurrencies</h1> */}
      <StatsBanner
        left_top_header="Total coins"
        left_top_content={stats?.totalCoins}
        right_top_header="Total markets"
        right_top_content={stats?.totalMarkets}
        top_row_header="Total Market cap"
        top_row_content={stats?.totalMarketCap}
        btm_row_header="Total 24h volume"
        btm_row_content={stats?.total24hVolume}
      />
      {/* <span className="hidden md:inline font-bold text-2xl">Newest coins</span> */}
      {/* <div className={styles.new_coin_container}>
        {newestCoins?.map((newCoin) => (
          <div key={newCoin.uuid} className={styles.new_coin_card}>
            <div className={styles.coin_icon_container}>
              <img className={styles.coin_icon} src={newCoin.iconUrl} alt="" />
            </div>
            <span>{newCoin.symbol}</span>
            <span>{newCoin.name}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default GlobalStats;
