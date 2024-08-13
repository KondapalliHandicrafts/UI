import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
  useScrollTrigger
} from '@mui/material';
import {
  DashboardIcon,
  HeartIcon,
  HomeIcon,
  KeyIcon,
  LogoutIcon,
  MenuIcon,
  ProfileIcon,
  SearchIcon
  // LoginIcon
} from '../../SharedJSX/SVG';
import { Avatar, IconButton } from '../../SharedJSX';
// import Button from '__SHARED__/Button';

const styles = {
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
    borderRadius: '10px',
    // backgroundColor: fade('common.white', 0.15),
    // '&:hover': {
    //   backgroundColor: fade('common.white', 0.25)
    // },
    marginRight: '1rem',
    marginLeft: { xs: 0, sm: '2rem' },
    width: '50%'
  },
  sectionDesktop: {
    display: { xs: 'none', md: 'flex' },
    marginLeft: 'auto'
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
    display: { xs: 'flex', md: 'none' },
    marginLeft: 'auto'
  }
};

const ElevationScroll = props => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
};

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired
};

const Header = props => {
  const { isLoggedIn, logoutRequest, isAdmin } = props;
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const iOS =
    typeof window === 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

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
      icon: <ProfileIcon sx={styles.menuIcon} />
    },
    {
      id: 2,
      displayName: 'My Wishlist',
      path: '/myWishlist',
      icon: <HeartIcon sx={styles.menuIcon} />
    },
    {
      id: 3,
      displayName: 'Change Password',
      path: '/changePassword',
      icon: <KeyIcon sx={styles.menuIcon} />
    }
  ];

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      getContentAnchorEl={null}
      id="user-menu"
      onClose={handleMenuClose}
      open={Boolean(anchorEl)}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      {headerMenu.map(item => (
        <MenuItem
          key={item.id}
          onClick={() => {
            navigate(item.path);
            handleMenuClose();
          }}
          sx={styles.itemWrap}
        >
          {item.displayName} {item.icon}
        </MenuItem>
      ))}
      <MenuItem
        onClick={() => {
          logoutRequest();
          handleMenuClose();
        }}
        sx={styles.itemWrap}
      >
        Logout <LogoutIcon sx={styles.menuIcon} />
      </MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar color="secondary">
          <Toolbar disableGutters variant="dense">
            {isLoggedIn ? (
              <IconButton
                icon={<MenuIcon />}
                onClick={e => toggleDrawer(e, true)}
                sx={styles.menuIcon}
              />
            ) : null}
            <Typography component="h6" sx={styles.logo} variant="h6">
              Kondapalli Handicafts
            </Typography>
            {location.pathname.includes('/home') && (
              <Grid sx={styles.search}>
                <TextField
                  fullWidth
                  id="search"
                  InputProps={{
                    startAdornment: <SearchIcon />
                  }}
                  placeholder="Search"
                />
              </Grid>
            )}
            {/* {!isLoggedIn && history.location.pathname !== '/login' && (
              <Button
                startIcon={<LoginIcon />}
                sx={styles.loginBtn}
                onClick={() => history.push('/login')}
              >
                Login
              </Button>
            )} */}
            {isLoggedIn ? (
              <IconButton
                icon={
                  <Avatar>
                    <ProfileIcon />
                  </Avatar>
                }
                onClick={handleProfileMenuOpen}
                sx={styles.loginBtn}
              />
            ) : null}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Drawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        onClose={e => toggleDrawer(e, false)}
        onOpen={e => toggleDrawer(e, true)}
        open={drawerOpen}
        PaperProps={{ sx: styles.paper }}
      >
        <Typography component="h6" sx={styles.logo} variant="h6">
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
                  key={item.text}
                  button
                  onClick={e => {
                    navigate(item.path);
                    toggleDrawer(e, false);
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              )
          )}
        </List>
      </Drawer>
      {renderMenu}
    </React.Fragment>
  );
};

Header.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  logoutRequest: PropTypes.func.isRequired
};

export default Header;
