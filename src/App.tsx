import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Sidebar from "./components/Sidebar";
import Exchanges from "./components/Exchanges";
import Markets from "./components/Markets";
import CoinDetails from "./components/CoinDetails";
import { Chart,registerables } from "chart.js";
Chart.register(...registerables)
const styles = {
  App: "w-full h-screen bg-background flex flex-row overflow-hidden",
  siedbar_container: "hidden lg:flex",
  main: "w-full lg:pt-20 xl:px-24",
};

const App = () => {
  return (
    <div className={styles.App}>
      <div className={styles.siedbar_container}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        <Routes>
          <Route path="/" element={<Cryptocurrencies />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/markets" element={<Markets />} />
          <Route path = '/crypto/:coin_uuid' element = {<CoinDetails/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
