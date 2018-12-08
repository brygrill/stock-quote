import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import io from 'socket.io-client';
import { fetchQuoteData, fetchIndiciesData } from '../utils/fetch';

const socket = io('https://ws-api.iextrading.com/1.0/tops');

const indiciesCollection = ['SPY', 'QQQ', 'DIA', 'TLT', 'VXX'];

export const SocketContext = React.createContext();

export const SocketProvider = props => {
  const [session, setSession] = useState({
    connected: false,
    error: null,
  });

  const [fetching, setFetching] = useState({
    loading: true,
    error: null,
  });

  const [symbol, setSymbol] = useState(null);

  const [quoteLast, setQuoteLast] = useState(null);
  const [quoteData, setQuoteData] = useState(null);

  const [indiciesLast, setIndiciesLast] = useState([]);
  const [indiciesData, setIndiciesData] = useState([]);

  const ws = () => {
    try {
      socket.on('connect', () => {
        setSession({ connected: true, error: null });
        socket.emit('subscribe', 'firehose');
      });

      socket.on('disconnect', () => {
        setSession({ connected: false, error: null });
      });

      socket.on('message', message => {
        const parse = JSON.parse(message);
        if (_.includes(indiciesCollection, parse.symbol)) {
          console.log(parse);
          // TODO: dont lose previous state
          console.log(indiciesLast);
          setIndiciesLast([...indiciesLast, parse]);
        }

        if (parse.symbol === symbol) {
          setQuoteLast(parse);
        }
      });
    } catch (error) {
      setSession({ connected: false, error });
    }
  };

  const onMount = async () => {
    try {
      const data = await fetchIndiciesData(indiciesCollection);
      setIndiciesData(data);
      setFetching({ loading: false, error: null });
    } catch (error) {
      setFetching({ loading: false, error });
    }
  };

  const handleSymbolChange = async symbol => {
    try {
      setFetching({ loading: true, error: null });
      const data = await fetchQuoteData(symbol);
      setSymbol(symbol);
      setQuoteData(data);
      setFetching({ loading: false, error: null });
    } catch (error) {
      setFetching({ loading: false, error });
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
        fetching,
        symbol,
        quoteLast,
        quoteData,
        indiciesLast,
        indiciesData,
        handleSymbolChange,
        ...props,
      }}
    >
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

export const withSocketContext = () => ReactComp => {
  const WithSocketContext = props => {
    return (
      <SocketContext.Consumer>
        {context => <ReactComp {...context} {...props} />}
      </SocketContext.Consumer>
    );
  };

  return WithSocketContext;
};
