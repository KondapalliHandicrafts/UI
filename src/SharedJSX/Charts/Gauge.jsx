import { Gauge as MuiGuage, gaugeClasses } from '@mui/x-charts/Gauge';
import PropTypes from 'prop-types';

const getColor = value => {
  if (value < 70) return 'success.light';
  if (value < 85) return 'warning.light';
  return 'error.main';
};

const Guage = props => {
  const { startAngle = -90, endAngle = 90, value, sx = {}, ...others } = props;
  return (
    <MuiGuage
      endAngle={endAngle}
      startAngle={startAngle}
      sx={[
        {
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: '1.5rem',
            transform: 'translateY(20px)'
          },
          [`& .${gaugeClasses.valueArc}`]: {
            color: getColor(value),
            fill: 'currentcolor'
          },
          [`& .${gaugeClasses.referenceArc}`]: {
            color: 'grey.A200',
            fill: 'currentcolor'
          }
        },
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
      value={value}
      {...others}
    />
  );
};

Guage.propTypes = {
  endAngle: PropTypes.number,
  startAngle: PropTypes.number,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  value: PropTypes.number.isRequired
};

export default Guage;
