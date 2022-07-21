import React from "react";
import "../components/Popup.css";
import http from "axios";
import { useAuth } from "../providers/auth";

const Popup = ({ coinInfo, coinData, handleClose }) => {
  const {user} = useAuth()
  const addToMyCoin = async () => {
    try {
		const response = await http.post('http://localhost:4000/api/user/add-to-mycoin', {id : coinInfo.id, name: coinInfo.name, user})

		console.log(response.data.message)
	} catch (err) {
		console.log(err.response.data.error)
	}
  };

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
            <img src={coinInfo.logo} alt="" />
            <button onClick={()=>{addToMyCoin(); handleClose()}}>Add to MyCoin</button>
          </div>
          <div className="browse-popup-right">
            <h1>{coinInfo.name}</h1>
            <div className="description">
              <p>{coinInfo.description}</p>
            </div>
          </div>
        </div>
            <div className="browse-popup-coin-details">
              <p>
                <b>{coinInfo.name} Price:</b> <br />
                {Math.floor(coinData.quote.USD.price * 100) / 100}$
              </p>
              <p>
                <b>Fully diluted market cap:</b> <br />{" "}
                {coinData.quote.USD.fully_diluted_market_cap}$
              </p>
              <div>
                <p>
                  <b>Volume (24h)</b> <br />
                  {coinData.quote.USD.volume_24h}$ <br /> Change:{" "}
                  {Math.floor(coinData.quote.USD.volume_change_24h * 100) / 100}
                  %
                </p>
              </div>
              <p>
                <b>circulating_supply:</b> <br />{" "}
                {Math.floor(coinData.circulating_supply * 100) / 100}{" "}
                {coinData.symbol}
              </p>
            </div>
      </div>
    </div>
  );
};

export default Popup;
