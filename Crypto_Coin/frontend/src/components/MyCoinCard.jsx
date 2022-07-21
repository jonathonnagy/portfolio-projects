import React, { useEffect, useState } from "react";
import http from "axios";
import MyPopup from './MyPopup'


const CoinCard = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coinData, setcoinData] = useState([])

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const getSavedFromApi = async () => {
    try {
      const response = await http.get(`http://localhost:4000/api/coin/info?id=${id}`
      // , {
      //   params: {
      //     id: coinId.toString(),
      //   },
      // }
      );
    //   console.log(response.data);
      setcoinData(response.data.data[id]);
    } catch (error) {
      console.log(error);
    }
  };

  // const response = {
  //   id: 5426,
  //   name: "Solana",
  //   symbol: "SOL",
  //   category: "coin",
  //   description:
  //     "Solana (SOL) is a cryptocurrency launched in 2020. Solana has a current supply of 511,616,946.142289 with 342,509,092.65125716 in circulation. The last known price of Solana is 37.92048467 USD and is up 6.24 over the last 24 hours. It is currently trading on 335 active market(s) with $2,061,880,125.34 traded over the last 24 hours. More information can be found at https://solana.com.",
  //   slug: "solana",
  //   logo: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
  //   subreddit: "solana",
  //   notice: "",
  //   tags: [
  //     "pos",
  //     "platform",
  //     "solana-ecosystem",
  //     "cms-holdings-portfolio",
  //     "kenetic-capital-portfolio",
  //     "alameda-research-portfolio",
  //     "multicoin-capital-portfolio",
  //     "okex-blockdream-ventures-portfolio",
  //   ],
  //   "tag-names": [
  //     "PoS",
  //     "Platform",
  //     "Solana Ecosystem",
  //     "CMS Holdings Portfolio",
  //     "Kenetic Capital Portfolio",
  //     "Alameda Research Portfolio",
  //     "Multicoin Capital Portfolio",
  //     "OKEx Blockdream Ventures Portfolio",
  //   ],
  //   "tag-groups": [
  //     "ALGORITHM",
  //     "CATEGORY",
  //     "PLATFORM",
  //     "CATEGORY",
  //     "CATEGORY",
  //     "CATEGORY",
  //     "CATEGORY",
  //     "CATEGORY",
  //   ],
  //   urls: {
  //     website: ["https://solana.com"],
  //     twitter: ["https://twitter.com/solana"],
  //     message_board: [
  //       "https://medium.com/solana-labs",
  //       "https://forums.solana.com",
  //     ],
  //     chat: ["https://discord.gg/Rz737rP", "https://t.me/solana"],
  //     facebook: [],
  //     explorer: [
  //       "https://explorer.solana.com",
  //       "https://solanabeach.io",
  //       "https://solana.fm/",
  //     ],
  //     reddit: ["https://reddit.com/r/solana"],
  //     technical_doc: ["https://solana.com/solana-whitepaper.pdf"],
  //     source_code: ["https://github.com/solana-labs"],
  //     announcement: [],
  //   },
  //   platform: null,
  //   date_added: "2020-04-10T00:00:00.000Z",
  //   twitter_username: "solana",
  //   is_hidden: 0,
  //   date_launched: "2020-03-16T00:00:00.000Z",
  //   contract_address: [],
  //   self_reported_circulating_supply: null,
  //   self_reported_tags: null,
  //   self_reported_market_cap: null,
  // };

  useEffect(() => {
	getSavedFromApi()
	// setcoinData(response)
  }, []);
// console.log(coinData)
  return (
    <>
      <div className="coin-card" onClick={togglePopup}>
        <div>
          <img src={coinData.logo} alt="" />
        </div>
        <h2>{coinData.name}</h2>
        <p>{coinData.symbol}</p>
      </div>
	  {isOpen && <MyPopup
	  coinData={coinData}
      handleClose={togglePopup}
    />}
    </>
  );
};

export default CoinCard;
