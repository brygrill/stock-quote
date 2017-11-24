import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VictoryChart, VictoryBar, VictoryLine, VictoryAxis } from 'victory';

const propTypes = {
  chart: PropTypes.array,
};

const defaultProps = {
  chart: [],
};

export default class VictoryChartComponent extends Component {
  render() {
    // console.log(this.props.chart);
    return (
      <VictoryChart>
        <VictoryAxis dependentAxis={false} />
        <VictoryAxis dependentAxis orientation="left" />
        <VictoryAxis dependentAxis orientation="right" />
        <VictoryLine
          style={{
            data: { stroke: '#c43a31' },
            parent: { border: '1px solid #ccc' },
          }}
          data={this.props.chart}
          labelComponent={<div />}
          labels={null}
          x="date"
          y="close"
        />
        <VictoryBar
          data={this.props.chart}
          x="date"
          y="volume"
          labelComponent={<div />}
        />
      </VictoryChart>
    );
  }
}

VictoryChartComponent.propTypes = propTypes;
VictoryChartComponent.defaultProps = defaultProps;
