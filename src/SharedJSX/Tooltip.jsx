import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid, Tooltip as MuiTooltip } from '@mui/material';

const Tooltip = props => {
  const { sx = {}, children, title, ...others } = props;
  return (
    <MuiTooltip
      arrow
      placement="bottom"
      sx={[...(Array.isArray(sx) ? sx : [sx])]}
      title={title}
      {...others}
    >
      <Grid>{children}</Grid>
    </MuiTooltip>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  title: PropTypes.string.isRequired
};

export default Tooltip;
