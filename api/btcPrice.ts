import axios from "axios";

export const getBtcPrice = async () => {
  const response = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
  return response.data.bitcoin.usd;
};


export const marketCap = async () => {
  const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_by_total_volume&per_page=100&page=1&sparkline=false&price_change_percentage=24h&locale=en");
  console.log(response.data)
  return response.data[0].market_cap;
};  

