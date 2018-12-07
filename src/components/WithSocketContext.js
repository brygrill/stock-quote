import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import io from 'socket.io-client';

const socket = io('https://ws-api.iextrading.com/1.0/tops');

const benchmarks = ['SPY', 'QQQ'];

export const SocketContext = React.createContext();

export const SocketProvider = props => {
  const [session, setSession] = useState({
    loading: true,
    connected: false,
    error: null,
  });

  const [symbol, setSymbol] = useState(null);

  const [quote, setQuote] = useState(null);

  const [benchmarkQuotes, setbenchmarkQuotes] = useState([]);

  const ws = () => {
    try {
      socket.on('connect', () => {
        setSession({ loading: false, connected: true, error: null });
        socket.emit('subscribe', 'firehose');
      });

      socket.on('disconnect', () => {
        setSession({ loading: false, connected: false, error: null });
      });

      socket.on('message', message => {
        const parse = JSON.parse(message);
        if (_.includes(benchmarks, parse.symbol)) {
          console.log(parse);
          // TODO: dont lose previous state
          setbenchmarkQuotes([...benchmarkQuotes, parse]);
        }
      });
    } catch (error) {
      setSession({ loading: false, connected: false, error });
    }
  };

  useEffect(() => {
    ws();
  }, []);

  return (
    <SocketContext.Provider
      value={{
        session,
        symbol,
        quote,
        benchmarkQuotes,
        setSymbol,
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
