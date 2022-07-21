import React, { useEffect, useState } from "react";
import http from "axios";
import Popup from "./Popup";

const CoinCard = ({ coinData }) => {
  const [coinInfo, setCoinInfo] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const getCoinInfo = async () => {
    try {
      const response = await http.get(`http://localhost:4000/api/coin/info`, {
        params: {
          id: coinData.id,
        },
      });
      console.log(response.data);
      setCoinInfo(response.data.data[coinData.id]);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  //   console.log(coinInfo);
  useEffect(() => {
    getCoinInfo();
  }, []);

  return (
    <>
      <div className="coin-card" onClick={togglePopup}>
        <div>
          <img src={coinInfo.logo} alt="" />
        </div>
        <h2>{coinData.name}</h2>
        <p>{coinData.symbol}</p>
      </div>
      {isOpen && (
        <Popup
          coinInfo={coinInfo}
          coinData={coinData}
          handleClose={togglePopup}
        />
      )}
    </>
  );
};

export default CoinCard;
