import axios from 'axios';
import _ from 'lodash';

const iex = axios.create({
  baseURL: 'https://api.iextrading.com/1.0/stock',
});

export const fetchQuoteData = async symbol => {
  const { data } = await iex.get(`/${symbol}/batch`, {
    params: {
      types: 'quote,chart,dividends,logo,stats',
      range: '1y',
    },
  });
  return data;
};

export const fetchIndiciesData = async symbols => {
  const quotes = await axios.all(
    _.map(symbols, async s => {
      return await fetchQuoteData(s);
    }),
  );

  return quotes;
};
