import * as React from 'react';
import PropTypes from 'prop-types';
import {
  PieChart as MuiPieChart,
  pieArcLabelClasses
} from '@mui/x-charts/PieChart';

const PieChart = props => {
  const { series, sx, height, width, ...others } = props;
  return (
    <MuiPieChart
      height={height}
      series={series}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold'
        },
        ...(Array.isArray(sx) ? sx : [sx])
      }}
      width={width}
      {...others}
    />
  );
};

PieChart.propTypes = {
  height: PropTypes.number.isRequired,
  series: PropTypes.array.isRequired,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  width: PropTypes.number.isRequired
};

export default PieChart;
