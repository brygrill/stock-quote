import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { XYPlot, LineSeries } from 'react-vis';

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
    console.log(this.props.chart);
    const data = setXY(this.props.chart);
    console.log(data);
    return (
      <div>
        <XYPlot height={300} width={600}>
          <LineSeries data={data} />
        </XYPlot>
      </div>
    );
  }
}

ChartComponent.propTypes = propTypes;
ChartComponent.defaultProps = defaultProps;
