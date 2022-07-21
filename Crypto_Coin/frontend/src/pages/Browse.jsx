import React, { useEffect, useState } from "react";
import http from "axios";
import CoinCard from "../components/CoinCard";

const Browse = () => {
  const [coinsArr, setcoinsArr] = useState([]);

  const getApiData = async () => {
    try {
      const response = await http.get("http://localhost:4000/api/coin/latest");
      console.log(response);
      setcoinsArr(response.data.data);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const [search, setSearch] = useState("");

  const searchData = coinsArr.filter((element) =>
    element.name.toLowerCase().includes(search.toLowerCase())
  );
  const topCoinsData = coinsArr.filter(
    (element) =>
      element.name === "Shiba Inu" ||
      element.name === "Terra" ||
      element.name === "Ethereum" ||
      element.name === "Polygon" ||
      element.name === "Bitcoin" ||
      element.name === "BNB" ||
      element.name === "Solana" ||
      element.name === "BNB"
  );

  useEffect(() => {
    getApiData();
  }, [search]);

  return (
    <>
      <div className="top">
        <div className="top-bg-img"></div>
        <div className="top-wrapper">
          <p>Browse</p>
          <h1 className="browse-header">Trending coins</h1>
          <div className="card-container">
            {topCoinsData.map((coinData, index) => (
              <CoinCard key={index} coinData={coinData} />
            ))}
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-wrapper">
          <div id="search-img"></div>
          <input
            type="text"
            placeholder="Search for coins"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="card-container">
            {searchData.map((coinData, index) => (
              <CoinCard key={index} coinData={coinData} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
