import dayjs from "dayjs";

const styles = {
  wrapper: "my-8  grid grid-cols-2 md:grid-cols-3  gap-y-8",
  card: "flex flex-col gap-1 md:gap-2 bg-crust p-3 rounded-2xl rounded-tl-lg mr-8 text-lg",
};

interface Props {
  heading_1?: string | number;
  content_1?: string | number;
  heading_2?: string | number;
  content_2?: string | number;
  heading_3?: string | number;
  content_3?: string | number;
  heading_4?: string | number;
  content_4?: string | number;
  heading_5?: string | number;
  content_5?: string | number;
  heading_6?: string | number;
  content_6?: string | number;
  peak_price_date: number;
}

const CoinStats = ({
  heading_1,
  heading_2,
  heading_3,
  heading_4,
  heading_5,
  heading_6,
  content_1,
  content_2,
  content_3,
  content_4,
  content_5,
  content_6,
  peak_price_date,
}: Props) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <span>{heading_1}</span>
        <span className="text-2xl">{content_1}</span>
      </div>
      <div className={styles.card}>
        <span>{heading_2}</span>
        <span className="text-2xl">{content_2}</span>
      </div>
      <div className={styles.card}>
        <span>{heading_3}</span>
        <span className="text-2xl">{content_3}</span>
      </div>
      <div className={styles.card}>
        <span>{heading_4}</span>
        <span className="text-2xl">{content_4}</span>
      </div>
      <div className={styles.card}>
        <span>{heading_5}</span>
        <div>
          <span className="text-2xl">{content_5} $</span>
          <span>Date: {dayjs.unix(peak_price_date).format('YYYY MMM D').toString()}</span>
        </div>
      </div>
      <div className={styles.card}>
        <span>{heading_6}</span>
        <span className="text-2xl">{content_6}</span>
      </div>
    </div>
  );
};

export default CoinStats;
