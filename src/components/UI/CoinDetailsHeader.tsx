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
        <div className="w-8"></div>
        <span>{name}</span>
        <div className="w-8"></div>
        <span>{symbol}</span>
      </div>
      <div className="flex flex-row items-center mr-8">
        <span>{millify(price)}</span>
        <div className="w-8"></div>
        <span className={change < 0 ? "text-red" : "text-green"} >{change > 0 ? "▲" : "▼"}{Math.abs(change)}</span>
      </div>
    </div>
  );
};

export default CoinDetailsHeader;
