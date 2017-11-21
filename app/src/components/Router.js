import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { InstantSearch } from 'react-instantsearch/dom';
import { Container, Grid } from 'semantic-ui-react';
import io from 'socket.io-client';

import SearchPage from './SearchPage';
import QuotePage from './QuotePage';
import NotFound from './NotFound';
import Menu from './Menu';

// Init socket.io
const socket = io('https://ws-api.iextrading.com/1.0/tops');

export default class RouterComponent extends Component {
  state = {
    wsConnected: false,
    symbol: null,
    wsQuote: null,
    wsLatest: null,
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
    this.setState({ symbol, wsLatest: null });
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
            <Menu symbol={this.state.symbol} toHome={this.handleSetSymbol} />
            <Container>
              <Grid>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={props => <SearchPage {...props} />}
                  />
                  <Route
                    exact
                    path="/:id"
                    render={props => (
                      <QuotePage
                        setSymbol={this.handleSetSymbol}
                        symbol={props.match.params.id}
                        wsQuote={this.state.wsQuote}
                        wsLatest={this.state.wsLatest}
                        {...props}
                      />
                    )}
                  />
                  <Route component={NotFound} />
                </Switch>
              </Grid>
            </Container>
          </div>
        </Router>
      </InstantSearch>
    );
  }
}
