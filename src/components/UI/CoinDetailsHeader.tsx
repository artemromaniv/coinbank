import millify from "millify";

const styles = {
  wrapper: "flex flex-row items-center justify-between",
  icon_container: "bg-white flex w-8 h-8 rounded-full items-center justify-center overflow-hidden",
  icon: "w-6 h-auto",
};

interface Props {
  name: string;
  iconUrl: string;
  symbol: string;
  price: number;
  change: number;
}

const CoinDetailsHeader = ({ name, iconUrl, symbol, price, change }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className="flex flex-row items-center">
        <div className={styles.icon_container}>
          <img src={iconUrl} alt={symbol} className={styles.icon} />
        </div>
        <span>{name}</span>
        <span>{symbol}</span>
      </div>
      <div className="flex flex-row items-center">
        <span>{millify(price)}</span>
        <span>{change}</span>
      </div>
    </div>
  );
};

export default CoinDetailsHeader;
