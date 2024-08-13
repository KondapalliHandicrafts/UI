import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import Slide from '@mui/material/Slide';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const styles = {
  tab: {
    '&.Mui-selected div': {
      color: 'colors.mainAction'
    },
    '&.Mui-selected:hover div': {
      color: 'common.black'
    },
    '&:hover': {
      zIndex: 10,
      color: 'common.black',
      '& > *': {
        zIndex: 10,
        color: 'common.black'
      }
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: 3,
      backgroundColor: 'colors.mainAction',
      transform: 'scaleY(0)',
      transition:
        'transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s, backgroundColor 0.1s'
    },
    '&:hover::before': {
      width: '100%',
      transform: 'scaleY(1)'
    }
  },
  verticalTab: {
    color: 'text.primary',
    minHeight: 50,
    textAlign: 'left',
    justifyContent: 'flex-start',
    p: 0,
    ml: '10px'
  },
  tabContent: {
    px: '2rem'
  },
  root: {
    flexGrow: 1
  },
  appbar: {
    transform: 'none',
    zIndex: 1
  },
  styledWrapper: {
    zIndex: 10
  }
};

const FullWidthTabs = props => {
  const [value, setValue] = useState(0);

  const handleChange = value1 => setValue(value1);

  const {
    tabs,
    tabContainerStyle = null,
    orientation = 'horizontal',
    hasAppbar = true,
    variant = 'standard',
    isStyled = false
  } = props;

  const isVertical = orientation === 'vertical';
  // const slideDirection = orientation === 'vertical' ? 'up' : 'left';
  const actions = [];

  const tabData = (
    <Tabs
      indicatorColor="primary"
      onChange={(e, value1) => handleChange(value1)}
      orientation={orientation}
      textColor="primary"
      value={value}
      variant={variant}
    >
      {tabs.map((item, index) => {
        actions.push({
          icon: item.icon,
          name: item.label,
          onClick: () => handleChange(index)
        });
        return (
          <Tab
            key={item.id}
            disabled={item.disabled}
            icon={item.icon}
            iconPosition="start"
            label={item.label}
            sx={[isStyled && styles.tab, isVertical && styles.verticalTab]}
            wrapped
          />
        );
      })}
    </Tabs>
  );
  const tabsData = hasAppbar ? (
    <AppBar color="transparent" position="static" sx={styles.appbar}>
      {tabData}
    </AppBar>
  ) : (
    tabData
  );

  return (
    <Grid container sx={styles.root}>
      {isVertical ? (
        <Grid item md={2} sm={3} xl={1}>
          {tabsData}
        </Grid>
      ) : (
        <Grid item xs={12}>
          {tabsData}
        </Grid>
      )}
      <Grid
        item
        md={isVertical ? 10 : null}
        xl={isVertical ? 11 : null}
        xs={12}
      >
        {tabs.map((item, index) => (
          // <Slide
          //   direction={slideDirection}
          //   in={value === index}
          //   mountOnEnter
          //   onExit={hideElement}
          //   unmountOnExit
          // >
          <Grid
            key={item.id}
            container
            sx={[tabContainerStyle, !item.disablePadding && styles.tabContent]}
          >
            {value === index && item.content}
          </Grid>
          // </Slide>
        ))}
      </Grid>
    </Grid>
  );
};

FullWidthTabs.propTypes = {
  hasAppbar: PropTypes.bool,
  isStyled: PropTypes.bool,
  orientation: PropTypes.string,
  tabContainerStyle: PropTypes.string,
  tabs: PropTypes.array.isRequired,
  variant: PropTypes.string
};

export default FullWidthTabs;
