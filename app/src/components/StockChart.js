import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { scaleTime } from 'd3-scale';
import { ChartCanvas, Chart } from 'react-stockcharts';
import { AreaSeries } from 'react-stockcharts/lib/series';
import { XAxis, YAxis } from 'react-stockcharts/lib/axes';
import { fitWidth } from 'react-stockcharts/lib/helper';

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

class StockChartComponent extends Component {
  render() {
    console.log(this.props.chart);
    return (
      <ChartCanvas
        ratio={2}
        width={600}
        height={400}
        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
        seriesName="MSFT"
        data={this.props.chart}
        type="hybrid"
        xAccessor={d => d.date}
        xScale={scaleTime()}
        xExtents={[new Date(2011, 0, 1), new Date(2013, 0, 2)]}>
        <Chart id={0} yExtents={y => y.close}>
          <XAxis axisAt="bottom" orient="bottom" ticks={6} />
          <YAxis axisAt="left" orient="left" />
          <AreaSeries yAccessor={d => d.close} />
        </Chart>
      </ChartCanvas>
    );
  }
}

StockChartComponent.propTypes = propTypes;
StockChartComponent.defaultProps = defaultProps;

// export default fitWidth(StockChartComponent);
export default StockChartComponent;
