import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { formatPrice } from '../helpers';

const propTypes = {
  symbol: PropTypes.string,
  price: PropTypes.number,
};

const defaultProps = {
  symbol: '',
  price: 0.0,
};

export default class HelmetComponent extends Component {
  render() {
    return (
      <Helmet defaultTitle="Stock Quote">
        <title>
          {`${this.props.symbol} ${formatPrice(this.props.price)}`}
        </title>
      </Helmet>
    );
  }
}

HelmetComponent.propTypes = propTypes;
HelmetComponent.defaultProps = defaultProps;
