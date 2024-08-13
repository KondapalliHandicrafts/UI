import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Typography,
  breadcrumbsClasses
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { ExpandMoreIcon } from './SVG';

const Breadcrumbs = props => {
  const { breadcrumbNameMap } = props;
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  return (
    <MuiBreadcrumbs
      separator={<ExpandMoreIcon direction="right" />}
      sx={{
        ml: '1rem',
        my: '1rem',
        [`& .${breadcrumbsClasses.separator}`]: { m: 0 }
      }}
    >
      <Link color="inherit" component={RouterLink} to="/" underline="hover">
        Home
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        return last ? (
          <Typography key={to} color="text.primary">
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <Link
            key={to}
            color="inherit"
            component={RouterLink}
            to={to}
            underline="hover"
          >
            {breadcrumbNameMap[to]}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
};

Breadcrumbs.propTypes = {
  breadcrumbNameMap: PropTypes.object.isRequired
};

export default Breadcrumbs;
