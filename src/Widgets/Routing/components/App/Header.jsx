import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { fade, makeStyles } from '@material-ui/core/styles';
import IconButton from '__SHARED__/IconButton';
import Avatar from '__SHARED__/Avatar';
import {
  MenuIcon,
  SearchIcon,
  HeartIcon,
  ProfileIcon,
  KeyIcon,
  HomeIcon,
  DashboardIcon,
  LogoutIcon
  // LoginIcon
} from '__SHARED__/SVG';
// import Button from '__SHARED__/Button';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  logo: {
    marginLeft: '1rem'
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
  itemWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  menuIcon: {
    marginLeft: '1rem',
    marginRight: '1rem'
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
  const { isLoggedIn, logoutRequest, isAdmin } = props;
  const history = useHistory();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {}, [history.location.pathname]);

  const toggleDrawer = (event, open) => {
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

  const headerMenu = [
    {
      id: 1,
      displayName: 'Profile',
      path: '/profile',
      icon: <ProfileIcon className={classes.menuIcon} />
    },
    {
      id: 2,
      displayName: 'My Wishlist',
      path: '/myWishlist',
      icon: <HeartIcon className={classes.menuIcon} />
    },
    {
      id: 3,
      displayName: 'Change Password',
      path: '/changePassword',
      icon: <KeyIcon className={classes.menuIcon} />
    }
  ];

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
      {headerMenu.map(item => (
        <MenuItem
          key={item.id}
          className={classes.itemWrap}
          onClick={() => {
            history.push(item.path);
            handleMenuClose();
          }}
        >
          {item.displayName} {item.icon}
        </MenuItem>
      ))}
      <MenuItem
        className={classes.itemWrap}
        onClick={() => {
          logoutRequest(history);
          handleMenuClose();
        }}
      >
        Logout <LogoutIcon className={classes.menuIcon} />
      </MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar color="secondary">
          <Toolbar variant="dense" disableGutters>
            {isLoggedIn && (
              <IconButton
                className={classes.menuIcon}
                onClick={e => toggleDrawer(e, true)}
                icon={<MenuIcon />}
              />
            )}
            <Typography className={classes.logo} variant="h6" component="h6">
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
            {/* {!isLoggedIn && history.location.pathname !== '/login' && (
              <Button
                startIcon={<LoginIcon />}
                className={classes.loginBtn}
                onClick={() => history.push('/login')}
              >
                Login
              </Button>
            )} */}
            {isLoggedIn && (
              <IconButton
                className={classes.loginBtn}
                onClick={handleProfileMenuOpen}
                icon={
                  <Avatar>
                    <ProfileIcon />
                  </Avatar>
                }
              />
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <SwipeableDrawer
        PaperProps={{ className: classes.paper }}
        open={drawerOpen}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        onClose={e => toggleDrawer(e, false)}
        onOpen={e => toggleDrawer(e, true)}
      >
        <Typography className={classes.logo} variant="h6" component="h6">
          Kondapalli Handicafts
        </Typography>
        <Divider />
        <List>
          {[
            { icon: <HomeIcon />, text: 'Home', path: '/home' },
            isAdmin && {
              icon: <DashboardIcon />,
              text: 'Admin Dashboard',
              path: '/adminDashboard'
            },
            { icon: <KeyIcon />, text: 'Send email' },
            { icon: <KeyIcon />, text: 'Drafts' }
          ].map(
            item =>
              item && (
                <ListItem
                  button
                  key={item.text}
                  onClick={e => {
                    history.push(item.path);
                    toggleDrawer(e, false);
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              )
          )}
        </List>
      </SwipeableDrawer>
      {renderMenu}
    </React.Fragment>
  );
}

ElevateAppBar.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  logoutRequest: PropTypes.func.isRequired
};
