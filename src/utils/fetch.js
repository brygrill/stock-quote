import axios from 'axios';
import _ from 'lodash';

const iex = axios.create({
  baseURL: 'https://api.iextrading.com/1.0/stock',
});

export const fetchQuoteData = async symbol => {
  const { data } = await iex.get(`/${symbol}/batch`, {
    params: {
      types: 'quote,chart,dividends,logo,stats,news',
      range: '1y',
    },
  });
  return data;
};

export const fetchBatchData = async symbols => {
  const { data } = await iex.get(`/market/batch`, {
    params: {
      symbols,
      types: 'quote,chart',
      range: '1y',
    },
  });
  return data;
};

export const fetchIndiciesData = async symbols => {
  const quotes = await fetchBatchData(_.toString(symbols));

  return quotes;
};
