import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Segment, Popup, Icon } from 'semantic-ui-react';
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

const styles = {
  topStatsSeg: {
    backgroundColor: '#000',
  },
  topStatsH2: {
    fontWeight: 300,
    margin: 0,
  },
  topStatsLabel: {
    fontWeight: 300,
    color: '#535757',
  },
  topStatsContent: {
    display: 'flex',
    alignItems: 'center',
  },
};

export default class StatsComponent extends Component {
  render() {
    if (this.props.stockFound) {
      const up = this.props.changePercent >= 0;
      return (
        <div>
          {/* SYMBOL */}
          <Header
            as="h2"
            inverted
            textAlign="center"
            style={{ fontWeight: 300, fontSize: '3rem' }}
          >
            {this.props.symbol}
            <Header.Subheader>{this.props.name}</Header.Subheader>
          </Header>

          {/* PRICE */}
          <Segment clearing inverted style={styles.topStatsSeg}>
            <Header
              as="h2"
              floated="left"
              textAlign="left"
              inverted
              style={styles.topStatsH2}
              color={up ? 'green' : 'red'}
            >
              <Header.Subheader style={styles.topStatsLabel}>
                LAST
              </Header.Subheader>
              <Header.Content style={styles.topStatsContent}>
                {numeral(this.props.price).format('$0,0.00')}
                <Popup
                  inverted
                  on="click"
                  trigger={
                    <Icon
                      name="lightning"
                      size="small"
                      color="yellow"
                      style={
                        this.props.live
                          ? { display: 'inherit' }
                          : { display: 'none' }
                      }
                    />
                  }
                >
                  <Popup.Content>
                    <a href="https://iextrading.com/developer/">
                      IEX Real Time Price
                    </a>
                  </Popup.Content>
                </Popup>
              </Header.Content>
            </Header>
            <Header
              as="h2"
              floated="right"
              textAlign="right"
              inverted
              style={styles.topStatsH2}
              color={up ? 'green' : 'red'}
            >
              <Header.Subheader style={styles.topStatsLabel}>
                TODAY
              </Header.Subheader>
              <Header.Content>
                <Icon
                  name={up ? 'caret up' : 'caret down'}
                  size="small"
                  color={up ? 'green' : 'red'}
                />
                {numeral(this.props.changePercent).format('0.000%')}
              </Header.Content>
            </Header>
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
