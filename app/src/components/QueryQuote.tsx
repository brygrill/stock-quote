import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { iex } from '../config';

const fetchQuote = async (key: string, { symbol }: { symbol: string }) => {
  const url = iex.quote(symbol);
  const { data } = await axios.get(url);
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
