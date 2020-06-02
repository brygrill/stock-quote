import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const endpoint = (symbol: string) =>
  `https://sandbox.iexapis.com/stable/stock/${symbol}/quote?token=${process.env.REACT_APP_IEX}`;

const fetchQuote = async (key: string, { symbol }: { symbol: string }) => {
  console.log(symbol);
  const { data } = await axios.get(endpoint(symbol));
  return data;
};

const Quote = ({ symbol }: { symbol: string }) => {
  const { data } = useQuery(['quote', { symbol }], fetchQuote, {
    suspense: true,
  });
  console.log(data);
  return <div>{symbol}</div>;
};

export default Quote;
