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
      types: 'quote',
    },
  });
  return data;
};

export const fetchMarketNews = async () => {
  const { data } = await iex.get(`/market/news`);
  return data;
};

export const fetchInFocus = async () => {
  const { data } = await iex.get(`/market/list/infocus`);
  return data;
};

export const fetchIndiciesData = async symbols => {
  const data = await Promise.all([
    await fetchBatchData(_.toString(symbols)),
    await fetchMarketNews(),
    await fetchInFocus(),
  ]);

  return { quotes: data[0], news: data[1], infocus: data[2] };
};
