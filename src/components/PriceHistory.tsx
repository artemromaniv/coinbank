import { Line } from "react-chartjs-2";
interface Props {
  sparkLine: number[];
}

const styles = {
  wrapper: "p-2 rounded-2xl border-white bg-peach",
};

const PriceHistory = ({ sparkLine }: Props) => {
  const data = {
    label: "PriceHistory",
    datasets: [{label:'price' ,data: sparkLine }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div className={styles.wrapper}>
      <Line options={options} data={data} />
    </div>
  );
};

export default PriceHistory;
