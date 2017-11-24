import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Line,
} from 'recharts';

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
      <ResponsiveContainer height={500}>
        <ComposedChart
          data={this.props.chart}
          margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
        >
          <XAxis dataKey="label" />
          <YAxis
            dataKey="close"
            type="number"
            yAxisId="left"
            orientation="left"
            domain={['auto', 'auto']}
          />
          <YAxis
            dataKey="volume"
            type="number"
            domain={['auto', 'auto']}
            yAxisId="right"
            orientation="right"
            height={200}
          />
          <Tooltip />
          <Bar dataKey="volume" fill="#82ca9d" yAxisId="right" />
          <Line
            type="monotone"
            dataKey="close"
            stroke="#8884d8"
            dot={false}
            yAxisId="left"
          />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}

ChartComponent.propTypes = propTypes;
ChartComponent.defaultProps = defaultProps;

export default ChartComponent;
