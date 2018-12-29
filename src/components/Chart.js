import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import { Grid, Segment, List } from 'semantic-ui-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import ChartMenu from './ChartMenu';
import { price, numRounded, formatNumber, chartUpDown } from '../utils/format';

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
          <List.Item>Vol: {formatNumber(item.volume)}</List.Item>
        </List>
      </Segment>
    );
  }

  return null;
};

const Chart = ({ charts, display }) => {
  const [activeChart, setActiveChart] = useState('d1');
  const { up, perc } = chartUpDown(activeChart, charts[activeChart]);
  return (
    <Media
      query="(min-width: 768px)"
      render={() => (
        <React.Fragment>
          <Grid.Row>
            <Grid.Column>
              <ChartMenu
                active={activeChart}
                perc={perc}
                up={up}
                onClick={setActiveChart}
              />
              <Segment attached>
                <ResponsiveContainer height={300}>
                  <AreaChart data={charts[activeChart]}>
                    <Tooltip
                      content={<CustomTooltip chart={charts[activeChart]} />}
                    />
                    {activeChart === 'd1' ? (
                      <XAxis
                        tick={false}
                        hide
                        type="number"
                        dataKey="index"
                        domain={['dataMin', 390]}
                      />
                    ) : (
                      <XAxis
                        tick={false}
                        hide
                      />
                    )}
                    <YAxis
                      hide
                      tick={false}
                      type="number"
                      tickFormatter={t => numRounded(t)}
                      interval={2}
                      domain={[dataMin => dataMin - dataMin * 0.005, 'dataMax']}
                    />
                    <Area
                      type="monotone"
                      dataKey="close"
                      stroke={up ? '#2ecc40' : '#db2828'}
                      fill={up ? '#2ecc408a' : '#db28288a'}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </React.Fragment>
      )}
    />
  );
};

Chart.propTypes = {
  charts: PropTypes.object.isRequired,
  display: PropTypes.object.isRequired,
};

export default Chart;
