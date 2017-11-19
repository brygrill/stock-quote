import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Segment, Statistic } from 'semantic-ui-react';

const propTypes = {
  stockFound: PropTypes.bool.isRequired,
  symbol: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

const defaultProps = {
  symbol: '',
  name: '',
  price: 0.0,
};

export default class StatsComponent extends Component {
  render() {
    if (this.props.stockFound) {
      return (
        <Segment inverted className="statsSeg">
          <Header as="h2" inverted style={{ margin: 0 }}>
            {this.props.symbol}
            <Header.Subheader>{this.props.name}</Header.Subheader>
          </Header>
          <Statistic
            inverted
            style={{ margin: 0 }}
            size="small"
            value={`$${this.props.price}`}
          />
        </Segment>
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
