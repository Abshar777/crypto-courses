import axios from "axios";

export const getBtcPrice = async () => {
  const response = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
  return response.data.bitcoin.usd;
};


export const marketCap = async () => {
  const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin");
  console.log(response.data)
  return response.data[0].market_cap;
};  

