import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";

const CoinDetails = () => {
  const { coin_uuid } = useParams();
  const { data, isLoading, error } = useGetCryptoDetailsQuery(coin_uuid);
  const [coinDetails,setCoinDetails] = useState({})
    useEffect(() => {
        setCoinDetails(data?.data?.coin)
    },[data])

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
        <div>
          <div>
            <span>{coin_uuid}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default CoinDetails;
