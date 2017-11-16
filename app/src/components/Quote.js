import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Search from './Search';

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
  };

  componentDidMount() {
    this.fetchQuote(this.props.symbol);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.symbol !== nextProps.symbol) {
      this.fetchQuote(nextProps.symbol);
    }
  }

  fetchQuote = symbol => {
    // set parent component state
    this.props.setSymbol(this.props.symbol.toUpperCase());
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
          quote: data.quote,
          chart: data.chart,
          dividends: data.dividends,
          stats: data.stats,
          logo: data.logo.url,
          restLatest: data.quote.latestPrice,
        });
      })
      .catch(err => {
        this.setState({ loading: false, error: true });
        console.error(err);
      });
  };

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <Search {...this.props} />
        <h1>{this.props.symbol}</h1>
        <h2>Stock quote here</h2>
        <h2>price: ${this.props.wsLatest || this.state.restLatest}</h2>
      </div>
    );
  }
}

Quote.propTypes = propTypes;
Quote.defaultProps = defaultProps;
