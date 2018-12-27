import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import { Grid, Header, Segment, List, Divider, Label } from 'semantic-ui-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { percent, price, numRounded, formatNumber } from '../utils/format';

const CustomTooltip = ({ chart, label, active }) => {
  if (chart[label] && active) {
    const item = chart[label];
    return (
      <Segment inverted>
        <List size="mini" inverted>
          <List.Item>
            <List.Header>{item.label}</List.Header>
          </List.Item>
          <List.Item>Close: {price(item.close)}</List.Item>
          <List.Item>Change: {percent(item.changePercent / 100)}</List.Item>
          <List.Item>Vol: {formatNumber(item.volume)}</List.Item>
        </List>
      </Segment>
    );
  }

  return null;
};

const Chart = ({ chart, display }) => {
  return (
    <Media
      query="(min-width: 768px)"
      render={() => (
        <React.Fragment>
          <Divider />
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <Header as="h3" textAlign="center">
                  1 YR Chart
                </Header>
                <ResponsiveContainer height={400}>
                  <AreaChart data={chart}>
                    <Tooltip content={<CustomTooltip chart={chart} />} />
                    <XAxis tick={false} hide />
                    <YAxis
                      hide
                      tick={false}
                      type="number"
                      tickFormatter={t => numRounded(t)}
                      interval={2}
                      domain={['dataMin', 'dataMax']}
                    />
                    <Area
                      type="monotone"
                      dataKey="close"
                      stroke={display.week52Up ? '#2ecc40' : '#db2828'}
                      fill={display.week52Up ? '#2ecc408a' : '#db28288a'}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Divider />
        </React.Fragment>
      )}
    />
  );
};

Chart.propTypes = {
  chart: PropTypes.array.isRequired,
  display: PropTypes.object.isRequired,
};

export default Chart;
