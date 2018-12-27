import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header } from 'semantic-ui-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  YAxis,
  Tooltip,
} from 'recharts';
// import { numRounded } from '../utils/format';

const Chart = ({ chart, display }) => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Header as="h3" textAlign="center">
          1 YR Chart
        </Header>
        <ResponsiveContainer
          height={400}
        >
          <AreaChart width={600} height={400} data={chart}>
            <YAxis
              hide
              type="number"
              domain={['dataMin', 'dataMax']}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="close"
              stroke={display.status === 'red' ? '#db2828' : '#2ecc40'}
              fill={display.status === 'red' ? '#db28288a' : '#2ecc408a'}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Grid.Column>
    </Grid.Row>
  );
};

Chart.propTypes = {
  chart: PropTypes.array.isRequired,
  display: PropTypes.object.isRequired,
};

export default Chart;
