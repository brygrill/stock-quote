import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Header } from 'semantic-ui-react';
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from 'recharts';

import { formatBigPriceNoDecimal } from '../helpers';

const propTypes = {
  chart: PropTypes.array,
};

const defaultProps = {
  chart: [
    {
      date: '2010-01-03T05:00:00.000Z',
      open: 25.436282332605284,
      high: 25.835021381744056,
      low: 25.411360259406774,
      close: 25.710416,
      volume: 38409100,
      split: '',
      dividend: '',
    },
    {
      date: '2010-01-04T05:00:00.000Z',
      open: 25.436282332605284,
      high: 25.835021381744056,
      low: 25.411360259406774,
      close: 25.710416,
      volume: 38409100,
      split: '',
      dividend: '',
    },
    {
      date: '2010-01-05T05:00:00.000Z',
      open: 25.436282332605284,
      high: 25.835021381744056,
      low: 25.411360259406774,
      close: 26.710416,
      volume: 38409100,
      split: '',
      dividend: '',
    },
    {
      date: '2010-01-06T05:00:00.000Z',
      open: 25.436282332605284,
      high: 25.835021381744056,
      low: 25.411360259406774,
      close: 27.710416,
      volume: 38409100,
      split: '',
      dividend: '',
    },
  ],
};

class ChartComponent extends Component {
  render() {
    return (
      <Segment inverted padded className="chartSeg">
        <Header
          as="h2"
          inverted
          textAlign="center"
          style={{ fontWeight: 300, color: '#535757' }}
        >
          CHART
        </Header>
        <ResponsiveContainer height={400}>
          <LineChart
            data={this.props.chart}
            margin={{ top: 0, right: 0, left: 0, bottom: -75 }}
          >
            <XAxis hide height={0} />
            <YAxis
              dataKey="close"
              type="number"
              yAxisId="left"
              orientation="left"
              width={50}
              domain={['auto', 'auto']}
              axisLine={false}
              tickLine={false}
              tick={{ stroke: '#535757', fontWeight: 'lighter' }}
              tickFormatter={t =>
                t < 10000 ? `$${t}` : formatBigPriceNoDecimal(t)
              }
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="close"
              stroke="#4B77BE"
              dot={false}
              yAxisId="left"
            />
          </LineChart>
        </ResponsiveContainer>
      </Segment>
    );
  }
}

ChartComponent.propTypes = propTypes;
ChartComponent.defaultProps = defaultProps;

export default ChartComponent;
