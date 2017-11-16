import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { InstantSearch } from 'react-instantsearch/dom';
import io from 'socket.io-client';

import Search from './Search';
import Quote from './Quote';

// Init socket.io
const socket = io('https://ws-api.iextrading.com/1.0/tops');

export default class RouterComponent extends Component {
  state = {
    wsConnected: false,
    symbol: null,
    wsQuote: null,
  };

  componentDidMount() {
    this.iexSocket();
  }

  // Open WS Connection on cDM
  iexSocket = () => {
    // Connect to the channel
    socket.on('connect', () => {
      this.setState({ wsConnected: true });
      socket.emit('subscribe', 'firehose');
    });

    // Listen to the channel's messages
    socket.on('message', message => {
      const wsQuote = JSON.parse(message);
      if (this.state.symbol && wsQuote.symbol === this.state.symbol) {
        this.setState({ wsQuote, wsLatest: wsQuote.lastSalePrice });
      }
    });

    // Disconnect from the channel
    socket.on('disconnect', () => this.setState({ wsConnected: false }));
  };

  // Set active symbol on Quote cDM
  handleSetSymbol = symbol => {
    this.setState({ symbol });
  };

  render() {
    return (
      <InstantSearch
        appId={process.env.REACT_APP_ALGOLIA_ID}
        apiKey={process.env.REACT_APP_ALGOLIA_API_KEY}
        indexName={process.env.REACT_APP_ALGOLIA_INDEX}
      >
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={props => (
                <Search {...props} />
              )}
            />
            <Route
              exact
              path="/:id"
              render={props => (
                <Quote
                  setSymbol={this.handleSetSymbol}
                  symbol={props.match.params.id}
                  wsQuote={this.state.wsQuote}
                  wsLatest={this.state.wsLatest}
                  {...props}
                />
              )}
            />
          </div>
        </Router>
      </InstantSearch>
    );
  }
}
