import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  ButtonGroup as MuiButtonGroup,
  Paper,
  Popper
} from '@mui/material';
import { ExpandMoreIcon } from './SVG';

const ThemeSelect = props => {
  const {
    sx = {},
    options,
    icon,
    onClick = null,
    selected,
    variant = 'outlined'
  } = props;
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleMenuItemClick = (event, index, option) => {
    setOpen(false);
    onClick(option);
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <MuiButtonGroup ref={anchorRef} sx={sx} variant={variant}>
        <Button
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          onClick={handleToggle}
          size="small"
        >
          {icon}
          <ExpandMoreIcon direction="down" sx={{ m: 0 }} />
        </Button>
      </MuiButtonGroup>
      <Popper
        anchorEl={anchorRef.current}
        disablePortal
        open={open}
        role={undefined}
        sx={{
          zIndex: 1
        }}
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom'
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem id="split-button-menu">
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      onClick={event =>
                        handleMenuItemClick(event, index, option)
                      }
                      selected={option === selected}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
};

ThemeSelect.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  options: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  variant: PropTypes.string
};

export default ThemeSelect;
