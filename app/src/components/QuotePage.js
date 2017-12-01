import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Grid, Header, Divider } from 'semantic-ui-react';

import Helmet from './Helmet';
import PriceStats from './PriceStats';
import DataStats from './DataStats';
import Chart from './Chart';
import Disclaimer from './Disclaimer';

import { calcPercCh } from '../helpers';

const propTypes = {
  symbol: PropTypes.string.isRequired,
  setSymbol: PropTypes.func.isRequired,
  wsLatest: PropTypes.number,
};

const defaultProps = {
  wsQuote: null,
  wsLatest: null,
};

// Init Axios
const iex = axios.create({
  baseURL: 'https://api.iextrading.com/1.0/stock',
});

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
    this.setState({ loading: true });
    // fetch data from IEX
    return iex
      .get(`/${symbol}/batch`, {
        params: {
          types: 'quote,chart,dividends,logo,stats',
          range: '1y',
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
    return (
      <Grid.Column width={16}>
        {this.state.loading ? (
          <Header inverted content="Loading..." />
        ) : (
          <Grid.Row>
            <Helmet
              symbol={this.state.quote.symbol}
              price={this.props.wsLatest || this.state.restLatest}
            />
            <PriceStats
              stockFound={this.state.stockFound}
              symbol={this.state.quote.symbol}
              name={this.state.quote.companyName}
              price={this.props.wsLatest || this.state.restLatest}
              change={this.state.quote.change}
              changePercent={
                this.props.wsLatest
                  ? calcPercCh(this.state.quote.close, this.props.wsLatest)
                  : this.state.quote.changePercent
              }
              live={this.props.wsLatest}
            />
            <Divider inverted />
            <DataStats
              week52low={this.state.stats.week52low}
              week52high={this.state.stats.week52high}
              week52change={this.state.stats.week52change / 100}
              marketCap={this.state.stats.marketcap}
              peRatio={this.state.quote.peRatio}
              dividendYield={this.state.stats.dividendYield / 100}
            />
            <Divider inverted />
            <Chart chart={this.state.chart} />
            <Disclaimer />
          </Grid.Row>
        )}
      </Grid.Column>
    );
  }
}

Quote.propTypes = propTypes;
Quote.defaultProps = defaultProps;
