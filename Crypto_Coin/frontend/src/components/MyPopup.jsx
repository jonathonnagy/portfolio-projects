import React, { useEffect, useState } from "react";
import http from "axios";
import "./Popup.css";
import { useAuth } from "../providers/auth";
import MyPortfolio from "./MyPortfolio";


const MyPopup = ({ coinData, handleClose }) => {
  const [coinInfo, setCoinInfo] = useState([]);
  // const [isLoading, setLoading] = useState(true);
  const {user, setReloadPage, reloadPage} = useAuth()


  const getDetailsApi = async () => {
    try {
      const response = await http.get(
        `http://localhost:4000/api/coin/latest-by-id?id=${coinData.id}`
      );
      setCoinInfo(response.data[coinData.id]);
    } catch (error) {
      console.log(error)
    }
  };
  // console.log(coinInfo.quote?.USDrice);
  // console.log(coinInfo);

  const removeFromMyCoin = async () => {
    try {
      const response = await http.post(
        "http://localhost:4000/api/user/remove-from-mycoin",
        { id: coinData.id, user }
      );
      console.log(response.data.message);
      setReloadPage(!reloadPage)
    } catch (err) {
      console.log(err.response?.data.error);
    }
  };

  useEffect(() => {
    getDetailsApi();

  }, []);

  // console.log(coinData);

  // if (isLoading) {
  //   return <div className="App">Loading...</div>;
  // }

  return (
    <div className="popup-box">
      <div className="close-background" onClick={handleClose}></div>
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          X
        </span>
        <div className="rocket_guy_img"></div>

        <div className="browse-popup-data-wrapper">
          <div className="browse-popup-left">
            <img src={coinData.logo} alt="" />
            <button onClick={() => {removeFromMyCoin(); handleClose()}}>Remove from MyCoin</button>
          </div>
          <div className="browse-popup-right">
            <h1>{coinData.name}</h1>
            <div className="description">
              <p>{coinData.description}</p>
            </div>
          </div>
        </div>
        <div className="browse-popup-coin-details">
          <p>
            <b>{coinData.name} Price:</b> <br />
            {Math.floor(coinInfo.quote?.USD.price * 100) / 100}$
          </p>
          <p>
            <b>Fully diluted market cap:</b> <br />{" "}
            {coinInfo.quote?.USD.fully_diluted_market_cap}$
          </p>
          <div>
            <p>
              <b>Volume (24h)</b> <br />
              {coinInfo.quote?.USD.volume_24h}$ <br /> Change:{" "}
              {Math.floor(coinInfo.quote?.USD.volume_change_24h * 100) / 100}%
            </p>
          </div>
          <p>
            <b>circulating_supply:</b> <br />{" "}
            {Math.floor(coinInfo.circulating_supply * 100) / 100}{" "}
            {coinData.symbol}
          </p>
        </div>
        <MyPortfolio coinData={coinData} coinInfo={coinInfo} />
      </div>
    </div>
  );
};

export default MyPopup;
