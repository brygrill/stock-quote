import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';

export const SocketContext = React.createContext();

export const SocketProvider = props => {
  const [session, setSession] = useState({
    loading: true,
    connected: false,
    error: null,
  });

  const [symbol, setSymbol] = useState(null);

  const [quote, setQuote] = useState(null);

  const openSocket = () => {
    console.log('open socket');
  };

  useEffect(() => {
    openSocket();
  }, []);

  return (
    <SocketContext.Provider
      value={{
        session,
        symbol,
        quote,
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
