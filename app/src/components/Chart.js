import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { FlexibleWidthXYPlot, YAxis, LineSeries } from 'react-vis';
import { Header, Segment } from 'semantic-ui-react';

const propTypes = {
  chart: PropTypes.array,
};

const defaultProps = {
  chart: [],
};

const setXY = data => {
  const forChart = data.map((item, index) => {
    return _.assign({}, item, {
      x: index,
      y: item.close,
    });
  });
  return forChart;
};

export default class ChartComponent extends Component {
  render() {
    const data = setXY(this.props.chart);
    return (
      <Segment inverted className="chartSeg">
        <FlexibleWidthXYPlot height={300}>
          <YAxis
            hideLine
            tickFormat={v => `$${v}`}
            width={60}
            style={{ line: { stroke: '#000000' } }}
          />
          <LineSeries data={data} />
        </FlexibleWidthXYPlot>
        <Header sub inverted textAlign="center" color="grey" style={{ margin: 0 }}>1 YR</Header>
      </Segment>
    );
  }
}

ChartComponent.propTypes = propTypes;
ChartComponent.defaultProps = defaultProps;
