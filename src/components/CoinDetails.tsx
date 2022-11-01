import millify from "millify";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import CoinDetailsHeader from "./UI/CoinDetailsHeader";
import CoinStats from "./UI/CoinStats";
import PriceHistory from "./UI/PriceHistory";

const styles = {
  wrapper: " h-screen w-full",
  grid_container: "flex flex-col",
};
interface CoinProps {
  sparkline: number[];
  marketCap: number;
  numberOfMarkets: number;
  numberOfExchanges: number;
  allTimeHigh: {
    price: number;
    timestamp: number;
  };
  supply: {
    max: number;
    total: number;
  };
  iconUrl: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
}

const CoinDetails = () => {
  const { coin_uuid } = useParams();
  const { data, isLoading, error } = useGetCryptoDetailsQuery(coin_uuid);
  const [coinDetails, setCoinDetails] = useState<CoinProps>(null!);
  useEffect(() => {
    setCoinDetails(data?.data?.coin);
  }, [data]);

  return (
    <>
      {error ? (
        <div>
          <span>I'm dead</span>
        </div>
      ) : isLoading ? (
        <div>
          <span>Loading stuff</span>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <CoinDetailsHeader
            iconUrl={coinDetails?.iconUrl}
            name={coinDetails?.name}
            symbol={coinDetails?.symbol}
            price={coinDetails?.price}
            change={coinDetails?.change}
          />
          <div className={styles.grid_container}>
            <CoinStats
              heading_1="Market Cap"
              content_1={coinDetails?.marketCap}
              heading_2="Markets"
              content_2={coinDetails?.numberOfMarkets}
              heading_3="Max supply"
              content_3={coinDetails?.supply.max ?? "unconfirmed"}
              heading_4="exchanges"
              content_4={coinDetails?.numberOfExchanges}
              heading_5="peak price"
              content_5={millify(coinDetails?.allTimeHigh.price)}
              peak_price_date = {coinDetails?.allTimeHigh?.timestamp}
              heading_6="Circulating amount"
              content_6={coinDetails?.supply.total ?? "unconfirmed"}
            />
            {/* <PriceHistory sparkLine={coinDetails?.sparkline} /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default CoinDetails;
