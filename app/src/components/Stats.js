import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

const propTypes = {
  stockFound: PropTypes.bool.isRequired,
  symbol: PropTypes.string,
  price: PropTypes.number,
};

const defaultProps = {
  symbol: null,
  price: 0.00,
};

export default class StatsComponent extends Component {
  render() {
    if (this.props.stockFound) {
      return (
        <Header sub inverted>
          <Header.Content>
            {this.props.symbol}
            <Header.Subheader>{this.props.price}</Header.Subheader>
          </Header.Content>
        </Header>
      );
    }
    return (
      <Header sub inverted>
        Not Found!
      </Header>
    );
  }
}

StatsComponent.propTypes = propTypes;
StatsComponent.defaultProps = defaultProps;
