import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { fade, makeStyles } from '@material-ui/core/styles';
import IconButton from '__SHARED__/IconButton';
import {
  MenuIcon,
  SearchIcon,
  ProfileIcon,
  KeyIcon,
  LogoutIcon,
  LoginIcon
} from '__SHARED__/SVG';
import Button from '__SHARED__/Button';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  list: {
    width: 250
  },
  loginBtn: {
    marginLeft: 'auto',
    marginRight: '2rem'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '50%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3)
    }
  },
  sectionDesktop: {
    display: 'none',
    marginLeft: 'auto',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    marginLeft: 'auto',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired
};

export default function ElevateAppBar(props) {
  const classes = useStyles();
  const { isLoggedIn, logout } = props;
  const history = useHistory();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {}, [history.location.pathname]);

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    )
      return;
    setDrawerOpen(open);
  };

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id="user-menu"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      getContentAnchorEl={null}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        Profile <ProfileIcon />
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        Change Password <KeyIcon />
      </MenuItem>
      <MenuItem
        onClick={() => {
          logout(history);
          handleMenuClose();
        }}
      >
        Logout <LogoutIcon />
      </MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar color="secondary">
          <Toolbar disableGutters>
            {isLoggedIn && (
              <IconButton onClick={toggleDrawer(true)} icon={<MenuIcon />} />
            )}
            <Typography variant="h6" component="h6">
              Kondapalli Handicafts
            </Typography>
            {history.location.pathname.includes('/home') && (
              <div className={classes.search}>
                <TextField
                  id="search"
                  placeholder="Search"
                  fullWidth
                  InputProps={{
                    startAdornment: <SearchIcon />,
                    disableUnderline: true
                  }}
                />
              </div>
            )}
            {!isLoggedIn && history.location.pathname !== '/login' && (
              <Button
                startIcon={<LoginIcon />}
                className={classes.loginBtn}
                onClick={() => history.push('/login')}
              >
                Login
              </Button>
            )}
            {isLoggedIn && (
              <IconButton
                className={classes.loginBtn}
                onClick={handleProfileMenuOpen}
                icon={<ProfileIcon />}
              />
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <SwipeableDrawer
        open={drawerOpen}
        anchor="left"
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        Testing
      </SwipeableDrawer>
      {renderMenu}
    </React.Fragment>
  );
}

ElevateAppBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};
