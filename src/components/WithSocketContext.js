import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import io from 'socket.io-client';
import Loading from './Loading';
import { fetchQuoteData, fetchIndiciesData } from '../utils/fetch';

const socket = io('https://ws-api.iextrading.com/1.0/tops');

const indiciesCollection = ['SPY', 'QQQ', 'TLT', 'VXX'];

export const SocketContext = React.createContext();

export const SocketProvider = props => {
  const [session, setSession] = useState({
    connected: false,
    error: null,
  });

  const [fetchingIncidies, setFetchingIndicies] = useState({
    loading: true,
    error: null,
  });

  const [fetchingQuote, setFetchingQuote] = useState({
    loading: true,
    error: null,
  });

  const [symbol, setSymbol] = useState(null);

  const [quoteLast, setQuoteLast] = useState(null);
  const [quoteData, setQuoteData] = useState(null);

  const [indiciesLast, setIndiciesLast] = useState({});
  const [indiciesData, setIndiciesData] = useState({});

  const ws = () => {
    try {
      socket.on('connect', () => {
        setSession({ connected: true, error: null });
        socket.emit('subscribe', 'firehose');
      });

      socket.on('connect_error', error => {
        setSession({ connected: false, error });
      });

      socket.on('connect_timeout', timeout => {
        setSession({ connected: false, error: timeout });
      });

      socket.on('error', error => {
        setSession({ connected: false, error });
      });

      socket.on('disconnect', () => {
        setSession({ connected: false, error: null });
      });

      socket.on('message', message => {
        const parse = JSON.parse(message);
        if (_.includes(indiciesCollection, parse.symbol)) {
          onMsg(parse, 'incidies');
        }

        if (parse.symbol === symbol) {
          onMsg(parse, 'symbol');
        }
      });
    } catch (error) {
      setSession({ connected: false, error });
    }
  };

  const onMsg = (msg, func) => {
    if (func === 'incidies') {
      setIndiciesLast({ [msg.symbol]: msg.lastSalePrice });
    } else {
      setQuoteLast(msg.lastSalePrice);
    }
  };

  const onMount = async () => {
    try {
      const data = await fetchIndiciesData(indiciesCollection);
      setIndiciesData(data);
      setFetchingIndicies({ loading: false, error: null });
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
    ws();
    onMount();
  }, []);

  return (
    <SocketContext.Provider
      value={{
        session,
        fetchingIncidies,
        fetchingQuote,
        symbol,
        quoteLast,
        quoteData,
        indiciesLast,
        indiciesData,
        handleSymbolChange,
        ...props,
      }}
    >
      {fetchingIncidies.loading && <Loading />}
      {props.children}
    </SocketContext.Provider>
  );
};

SocketProvider.propTypes = {
  children: PropTypes.node,
};

SocketProvider.defaultProps = {
  children: null,
};
