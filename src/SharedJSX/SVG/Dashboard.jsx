import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import styles from './styles.css';

const Dashboard = props => {
  const { sx = {}, width = 18, height = 18 } = props;

  return (
    <SvgIcon
      sx={[styles.icon, { width, height }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...props}
    >
      <path d="M12.984 3h8.016v6h-8.016v-6zM12.984 21v-9.984h8.016v9.984h-8.016zM3 21v-6h8.016v6h-8.016zM3 12.984v-9.984h8.016v9.984h-8.016z"></path>
    </SvgIcon>
  );
};

Dashboard.propTypes = {
  height: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  width: PropTypes.oneOfType(PropTypes.number, PropTypes.string)
};

export default Dashboard;
