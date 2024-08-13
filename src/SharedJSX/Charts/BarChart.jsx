import * as React from 'react';
import PropTypes from 'prop-types';
import { BarChart as MuiBarChart } from '@mui/x-charts';

const BarChart = props => {
  const {
    data,
    layout = 'horizontal',
    height = data.length * (layout === 'horizontal' ? 40 : 70),
    // width = data.length * 80,
    series,
    xAxis,
    yAxis,
    ...others
  } = props;
  return (
    <MuiBarChart
      dataset={data}
      grid={{ vertical: true }}
      height={height}
      layout={layout}
      series={series}
      // width={width}
      xAxis={xAxis}
      yAxis={yAxis}
      {...others}
    />
  );
};

BarChart.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.string,
  layout: PropTypes.string.isRequired,
  series: PropTypes.array.isRequired,
  width: PropTypes.string,
  xAxis: PropTypes.array.isRequired,
  yAxis: PropTypes.array.isRequired
};

export default BarChart;
