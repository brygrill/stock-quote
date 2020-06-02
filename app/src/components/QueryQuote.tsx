import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const endpoint = `https://sandbox.iexapis.com/stable/stock/AAPL/quote?token=${process.env.REACT_APP_IEX}`;
// async function fetchQuote() {
//   return (await fetch(
//     ,
//   )).json();
// }

const fetchQuote = async (symbol: string) => {
  console.log(symbol);
  const { data } = await axios.get(endpoint);
  return data;
};

const Quote = ({ symbol }: { symbol: string }) => {
  const { data } = useQuery('quote', fetchQuote, { suspense: true });
  console.log(data);
  return <div>{symbol}</div>;
};

export default Quote;
