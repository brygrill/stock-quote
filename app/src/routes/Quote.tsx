import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const fetchQuote = () => {
  return fetch(
    `https://sandbox.iexapis.com/stable/stock/AAPL/quote?token=${process.env.REACT_APP_IEX}`,
  ).then((response) => response.json());
};

const Quote = () => {
  const { symbol } = useParams();
  const { data } = useQuery('todos', fetchQuote);
  console.log(data);
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <div>Quote for {symbol}</div>
    </React.Suspense>
  );
};

export default Quote;
