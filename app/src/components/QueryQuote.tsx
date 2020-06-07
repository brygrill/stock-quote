import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { iex } from '../config';

const fetchQuote = async (key: string, { symbol }: { symbol: string }) => {
  try {
    const url = iex.quote(symbol);
    const data = await axios.get(url);
    return { quote: data.data, status: data.status, error: null };
  } catch (error) {
    // using try/catch does not trip the error in react-query
    // returning error in data object
    return {
      quote: null,
      status: error.response.status,
      error: error.response.data,
    };
  }
};

const Quote = ({ symbol }: { symbol: string }) => {
  const { isFetching, error, data } = useQuery(
    ['quote', { symbol }],
    fetchQuote,
    {
      // suspense: true,
      // refetchInterval: 5000,
    },
  );

  if (isFetching) return <div>Loading quote...</div>;

  if (error) return <div>well something really broke...</div>;

  if (data) {
    if (data.error) {
      if (data.status === 404) {
        return <div>symbol not found!, how about one of these</div>;
      }

      return <div>Error fetching quote!</div>;
    }

    return <div>{symbol} quote goes here</div>;
  }

  return <div>Unhandled state</div>;
};

export default Quote;
