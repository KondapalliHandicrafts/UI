import * as React from 'react';
import PropTypes from 'prop-types';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';

const AreaChart = props => {
  const { series, height = 250, ...others } = props;
  return (
    <LineChart
      height={height}
      series={series}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: 'none'
        }
      }}
      {...others}
    />
  );
};

AreaChart.propTypes = {
  height: PropTypes.number,
  series: PropTypes.array.isRequired,
  width: PropTypes.number,
  xLabels: PropTypes.array.isRequired
};

export default AreaChart;
