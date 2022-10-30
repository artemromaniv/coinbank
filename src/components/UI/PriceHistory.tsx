import { Line } from "react-chartjs-2";
interface Props {
  sparkLine: number[];
}

const styles = {
  wrapper: "mr-8",
};

const PriceHistory = ({ sparkLine }: Props) => {
  const data = {
    labels:[1,2,3,4,5,6,7,8,9,10,11],
    datasets: [
      {
        label: "price",
        backgroundColor: "#CBA6F7",
        borderColor: "#CBA6F7",
        data: sparkLine,
      },
    ],
  };

  const options = {
    responsive: true,
    // maintainAspectRatio: true,
  };

  console.log(data.datasets[0].data)
  return (
    <div className={styles.wrapper}>
      <Line options={options} data={data} height={"90%"} />
      
    </div>
  );
};

export default PriceHistory;
