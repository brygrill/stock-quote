import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default class Quote extends Component {
  componentDidMount() {
    console.log('fetching quote for', this.props.symbol);
  }

  render() {
    return (
      <div>
        <h1>{this.props.symbol}</h1>
        <h2>Stock quote here</h2>
      </div>
    );
  }
}

Quote.propTypes = propTypes;
