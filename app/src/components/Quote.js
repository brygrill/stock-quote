import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Grid } from 'semantic-ui-react';

import Search from './Search';
import Chart from './Chart';

// Init Axios
const iex = axios.create({
  baseURL: 'https://api.iextrading.com/1.0/stock',
});

const propTypes = {
  symbol: PropTypes.string.isRequired,
  setSymbol: PropTypes.func.isRequired,
  wsLatest: PropTypes.number,
};

const defaultProps = {
  wsQuote: null,
  wsLatest: null,
};

export default class Quote extends Component {
  state = {
    loading: true,
    quote: null,
    chart: null,
    dividends: null,
    logo: null,
    stats: null,
    restLatest: 0.0,
    error: false,
    stockFound: true,
  };

  componentDidMount() {
    this.fetchQuote(this.props.symbol);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.symbol !== nextProps.symbol) {
      this.fetchQuote(nextProps.symbol);
    }
  }

  onFetchError = err => {
    if (err.response) {
      if (err.response.status === 404) {
        this.setState({
          loading: false,
          stockFound: false,
        });
      } else {
        this.setState({ loading: false, error: true });
      }
    } else {
      this.setState({ loading: false, error: true });
    }
  };

  fetchQuote = symbol => {
    // set parent component state
    this.props.setSymbol(symbol.toUpperCase());
    // fetch data from IEX
    return iex
      .get(`/${symbol}/batch`, {
        params: {
          types: 'quote,chart,dividends,logo,stats',
          range: '1y',
          displayPercent: true,
        },
      })
      .then(({ data }) => {
        this.setState({
          loading: false,
          stockFound: true,
          quote: data.quote,
          chart: data.chart,
          dividends: data.dividends,
          stats: data.stats,
          logo: data.logo.url,
          restLatest: data.quote.latestPrice,
        });
      })
      .catch(err => {
        this.onFetchError(err);
      });
  };

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    return (
      <Grid.Column width={16}>
        <Search {...this.props} />
        {this.state.stockFound ? (
          <div>
            <h1>{this.props.symbol}</h1>
            <h2>Stock quote here</h2>
            <h2>price: ${this.props.wsLatest || this.state.restLatest}</h2>
            <Chart />

          </div>
        ) : (
          <div>Not Found!</div>
        )}
      </Grid.Column>
    );
  }
}

Quote.propTypes = propTypes;
Quote.defaultProps = defaultProps;
