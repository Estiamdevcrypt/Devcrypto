import { useState, useEffect, useCallback } from "react";

import { getSymbols, findByValue } from "../util";
import { CRYPTOCURRENCIES } from "../configs";

const useTicker = () => {
  const [ cryptocurrencies, setCryptocurrencies] = useState(CRYPTOCURRENCIES);

  const fetchCrypto = useCallback(async () => {
    try {

      const response = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbols=${JSON.stringify(getSymbols())}`);

      const data = await response.json();

      setCryptocurrencies(
        cryptocurrencies.map((item) => {
          const { lastPrice, lowPrice, highPrice } = findByValue(data, item.symbol ) || {};

          return {
            ...item,
            highPrice,
            lowPrice,
            price: lastPrice,
            prevPrice: item?.price || 0,
          }
      })
    );

    } catch (error) {
      console.log(error)
    }
  }, [cryptocurrencies]);

  useEffect(() => {
    const interval = setInterval(fetchCrypto, 50000);

    return () => clearInterval(interval);
  });

  return cryptocurrencies;
};

export { useTicker };