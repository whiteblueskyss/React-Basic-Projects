import { useEffect, useState } from "react"

const useCurrencyInfo = (currency) =>{
  const [data, setData] = useState({})
  const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

  useEffect(()=>{
    fetch(url)
    .then((respose)=>respose.json())
    .then((data) => setData(data[currency]));
  },[currency, url])
  console.log(data);
  return data;
}

export default useCurrencyInfo;