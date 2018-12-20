import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { fetchQuoteData, fetchIndiciesData } from '../utils/fetch';

const indiciesCollection = ['SPY', 'QQQ', 'TLT', 'VXX'];

export const DataContext = React.createContext();

export const DataProvider = props => {
  const [fetchingIncidies, setFetchingIndicies] = useState({
    loading: true,
    error: null,
  });

  const [fetchingQuote, setFetchingQuote] = useState({
    loading: true,
    error: null,
  });

  const [symbol, setSymbol] = useState(null);

  const [quoteData, setQuoteData] = useState(null);

  const [indiciesData, setIndiciesData] = useState({});

  const fetchIncidiesInterval = () => {
    setInterval(async () => {
      const data = await fetchIndiciesData(indiciesCollection);
      setIndiciesData(data);
    }, 30000);
  };

  const fetchQuoteInterval = (symbol, interval) => {
    console.log('quote');
    setInterval(async () => {
      console.log('quote data interval')
      const data = await fetchQuoteData(symbol);
      setQuoteData(data);
    }, interval);
  };

  const onMount = async () => {
    try {
      // fetch indicies data
      const data = await fetchIndiciesData(indiciesCollection);
      setIndiciesData(data);
      setFetchingIndicies({ loading: false, error: null });
      // init refresh interval
      fetchIncidiesInterval();
    } catch (error) {
      setFetchingIndicies({ loading: false, error });
    }
  };

  const handleSymbolChange = async symbol => {
    try {
      setFetchingQuote({ loading: true, error: null });
      const data = await fetchQuoteData(symbol);
      setQuoteData(data);
      setSymbol(symbol);
      setFetchingQuote({ loading: false, error: null });
    } catch (error) {
      setFetchingQuote({ loading: false, error });
    }
  };

  useEffect(() => {
    // ws();
    onMount();
  }, []);

  return (
    <DataContext.Provider
      value={{
        symbol,
        fetchingIncidies,
        fetchingQuote,
        quoteData,
        indiciesData,
        handleSymbolChange,
        fetchQuoteInterval,
        ...props,
      }}
    >
      {fetchingIncidies.loading && <Loading />}
      {props.children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node,
};

DataProvider.defaultProps = {
  children: null,
};
