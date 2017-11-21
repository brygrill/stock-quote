import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Segment, Statistic, Icon } from 'semantic-ui-react';
import numeral from 'numeral';

const propTypes = {
  stockFound: PropTypes.bool.isRequired,
  symbol: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  changePercent: PropTypes.number,
  live: PropTypes.number,
};

const defaultProps = {
  symbol: '',
  name: '',
  price: 0.0,
  changePercent: 0.0,
  live: false,
};

export default class StatsComponent extends Component {
  render() {
    if (this.props.stockFound) {
      return (
        <div>
          <Header
            as="h2"
            inverted
            textAlign="center"
            style={{ fontWeight: 300, fontSize: '3rem' }}
          >
            {this.props.symbol}
            <Header.Subheader>{this.props.name}</Header.Subheader>
          </Header>
          <Segment inverted className="statsSeg">
            <Statistic inverted horizontal style={{ margin: 0 }} color={this.props.changePercent >= 0 ? 'green' : 'red'}>
              <Statistic.Label style={{fontWeight: 300, color: '#888', marginRight: '.25rem'}}>
                LAST
              </Statistic.Label>
              <Statistic.Value style={{ fontWeight: 300 }}>
                {numeral(this.props.price).format('$0,0.00')}
              </Statistic.Value>
              <Statistic.Label>
                <Icon
                  name="lightning"
                  color={this.props.live ? 'yellow' : 'black'}
                />
              </Statistic.Label>
            </Statistic>
            <Statistic inverted horizontal style={{ margin: 0 }} color={this.props.changePercent > 0 ? 'green' : 'red'}>
              <Statistic.Value style={{ fontWeight: 300 }}>
                {numeral(this.props.changePercent).format('0.000%')}
              </Statistic.Value>
            </Statistic>
          </Segment>
        </div>
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
