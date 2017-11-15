import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import io from 'socket.io-client';

// Init socket.io
const socket = io('https://ws-api.iextrading.com/1.0/tops');

// Init Axios
const alphaInstance = axios.create({
  baseURL: 'http://www.alphavantage.co',
  // timeout: 2000,
});

const propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default class Quote extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    console.log('fetching quote for', this.props.symbol);
    this.iexSocket(this.props.symbol);
    // this.fetchQuote(this.props.symbol);
  }

  componentWillUnmount() {
    console.log('quote cDUM');
  }

  iexSocket = symbol => {
    // Listen to the channel's messages
    socket.on('message', message => console.log(message));

    // Connect to the channel
    socket.on('connect', () => {
      console.log('connected to iex');
      // Subscribe to topics (i.e. appl,fb,aig+)
      socket.emit('subscribe', 'snap');

      // Unsubscribe from topics (i.e. aig+)
      // socket.emit('unsubscribe', 'aig+');
    });

    socket.on('event', data => {
      console.log(data);
    });

    // Disconnect from the channel
    socket.on('disconnect', () => console.log('Disconnected.'));
  };

  fetchQuote = symbol => {
    return alphaInstance
      .get('/query', {
        params: {
          function: 'TIME_SERIES_INTRADAY',
          symbol,
          interval: '1min',
          apikey: process.env.REACT_APP_ALPHAVANTAGE,
        },
      })
      .then(data => {
        console.log(data);
        this.setState({ loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <h1>{this.props.symbol}</h1>
        <h2>Stock quote here</h2>
      </div>
    );
  }
}

Quote.propTypes = propTypes;
