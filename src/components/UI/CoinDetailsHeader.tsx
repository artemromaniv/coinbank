import millify from "millify";

const styles = {
  wrapper: "flex flex-col xl:flex-row items-center xl:justify-between  left-0 ",
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
      <div className="flex flex-row items-center text-2xl">
        <div className={styles.icon_container}>
          <img src={iconUrl} alt={symbol} className={styles.icon} />
        </div>
        <div className="w-8"></div>
        <span>{name}</span>
        <div className="w-4"></div>
        <span className="opacity-50">{symbol}</span>
      </div>
      <div className="flex flex-row items-center pr-8 text-xl">
        <span>{price}</span>
        <div className="w-8"></div>
        <span className={change < 0 ? "text-red" : "text-green"} >{change > 0 ? "▲" : "▼"}{Math.abs(change)}</span>
      </div>
    </div>
  );
};

export default CoinDetailsHeader;
