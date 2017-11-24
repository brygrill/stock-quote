import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, List, Grid } from 'semantic-ui-react';
import { formatPrice, formatPercent, formatMktCap } from '../helpers';

// Stat content
const Content = props => {
  return (
    <List.Content className="listFlex">
      <div className="listDataLabel">{props.label.toUpperCase()}</div>
      <div>{props.value}</div>
    </List.Content>
  );
};

Content.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

// Stat Component
const propTypes = {
  week52low: PropTypes.number.isRequired,
  week52high: PropTypes.number.isRequired,
  week52change: PropTypes.number.isRequired,
  marketCap: PropTypes.number.isRequired,
  peRatio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dividendYield: PropTypes.number,
};

const defaultProps = {
  peRatio: null,
  dividendYield: 0,
};

export default class DataStats extends Component {
  render() {
    const { week52low, week52high, week52change, marketCap, peRatio, dividendYield } = this.props;
    return (
      <Segment inverted padded className="dataStatsSeg">
        <Header
          as="h2"
          inverted
          textAlign="center"
          style={{ fontWeight: 300, color: '#535757' }}
        >
          STATS
        </Header>
        <Grid inverted>
          <Grid.Row>
            <Grid.Column width={8}>
              <List divided inverted verticalAlign="middle">
                <List.Item>
                  <Content label="52 Wk Low" value={formatPrice(week52low)} />
                </List.Item>
                <List.Item>
                  <Content label="52 Wk High" value={formatPrice(week52high)} />
                </List.Item>
                <List.Item>
                  <Content label="52 Wk Change" value={formatPercent(week52change)} />
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={8}>
              <List divided inverted verticalAlign="middle">
                <List.Item>
                  <Content label="Market Cap" value={formatMktCap(marketCap)} />
                </List.Item>
                <List.Item>
                  <Content label="P/E Ratio" value={peRatio || 'N/A'} />
                </List.Item>
                <List.Item>
                  <Content label="Dividend Yield" value={formatPercent(dividendYield)} />
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

DataStats.propTypes = propTypes;
DataStats.defaultProps = defaultProps;
