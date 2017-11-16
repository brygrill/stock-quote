import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { InstantSearch } from 'react-instantsearch/dom';
import io from 'socket.io-client';

import Search from './Search';
import Quote from './Quote';

// Init socket.io
const socket = io('https://ws-api.iextrading.com/1.0/tops');

// Search page wrapped in Angolia InstantSearch
const SearchPage = props => {
  return (
    <InstantSearch
      appId={process.env.REACT_APP_ALGOLIA_ID}
      apiKey={process.env.REACT_APP_ALGOLIA_API_KEY}
      indexName={process.env.REACT_APP_ALGOLIA_INDEX}
    >
      <Search push={props.push} {...props} />
    </InstantSearch>
  );
};

SearchPage.propTypes = {
  push: PropTypes.func.isRequired,
};

export default class RouterComponent extends Component {
  state = {
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
      console.log('connected to iex');
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
    socket.on('disconnect', () => console.log('Disconnected.'));
  };

  // Set active symbol on Quote cDM
  handleSetSymbol = symbol => {
    this.setState({ symbol });
  };

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={routeProps => <SearchPage push={routeProps.history.push} />}
          />
          <Route
            exact
            path="/:id"
            render={routeProps => (
              <Quote
                setSymbol={this.handleSetSymbol}
                symbol={routeProps.match.params.id}
                wsQuote={this.state.wsQuote}
                wsLatest={this.state.wsLatest}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}
