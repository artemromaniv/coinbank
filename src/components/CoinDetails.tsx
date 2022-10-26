import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import PriceHistory from "./PriceHistory";

const styles = {
  wrapper: " h-screen w-full p- ",
  grid_container: "grid grid-cols-3 grid-rows-2 bg-peach",
};
interface CoinProps {
  sparkline: number[];
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
          <div className={styles.grid_container}>
            <span>BTC</span>
            <span>BTC</span>
            <span>BTC</span>
            <PriceHistory sparkLine={coinDetails?.sparkline} />
          </div>
        </div>
      )}
    </>
  );
};

export default CoinDetails;
