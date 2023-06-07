import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaBitcoin } from "react-icons/fa";

const BitcionChart = () => {
  const [price, setPrice] = useState(0);
  const [change, setChange] = useState(0);
  // eslint-disable-next-line
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true"
        );
        const { bitcoin } = response.data;
        setPrice(bitcoin.usd);
        setChange(bitcoin.usd_24h_change);
        setLastUpdated(new Date(bitcoin.last_updated_at * 1000)); // Convert timestamp to Date object
      } catch (error) {
        console.log("Error fetching Bitcoin data:", error);
      }
    };

    fetchData();
  }, []);

  const number = price;
  const formattedNumber = new Intl.NumberFormat().format(number);

  return (
    <div className="w-full h-24 bg-white border shadow-md p-4 grid grid-cols-3 grid-rows-2 gap-2">
      <div className="col-span-2 row-span-1 flex justify-end items-center text-xl font-semibold border-b">
        ${formattedNumber}
      </div>
      <div className="col-span-2 row-span-1 flex justify-end items-center text-sm">
        <p
          className={`w-full text-right ${
            change >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          24h Change: {change.toFixed(2)}%
        </p>
      </div>
      <div className="col-span-1 row-span-2 flex justify-center items-center row-start-1">
        <FaBitcoin className="text-orange-400 text-5xl" />
      </div>
    </div>
  );
};

export default BitcionChart;
