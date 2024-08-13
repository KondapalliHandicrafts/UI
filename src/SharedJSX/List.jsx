import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  ListItemButton,
  ListItemText,
  ListSubheader,
  List as MuiList
} from '@mui/material';
import { ExpandMoreIcon } from './SVG';

const List = props => {
  const { subHeader, items } = props;
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const showIcons = open ? (
    <ExpandMoreIcon direction="down" />
  ) : (
    <ExpandMoreIcon direction="up" />
  );

  return (
    <MuiList
      component="nav"
      disablePadding
      subheader={
        subHeader ? (
          <ListSubheader component="div" id="nested-list-subheader">
            {subHeader}
          </ListSubheader>
        ) : null
      }
    >
      {items.map(item => {
        if (item.button)
          return (
            <React.Fragment key={item.key}>
              <ListItemButton
                onClick={() => {
                  if (item.collapse) handleClick();
                  if (item.handleClick) item.handleClick();
                }}
                sx={{ py: 0 }}
              >
                <ListItemText primary={item.text} sx={item.textStyle} />
                {item.collapse ? showIcons : null}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                {item.collapseContent}
              </Collapse>
            </React.Fragment>
          );
        return (
          <ListItemText
            key={item.key}
            primary={item.text}
            sx={[{ px: '1.5rem' }, item.textStyle]}
          />
        );
      })}
    </MuiList>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  subHeader: PropTypes.string.isRequired
};

export default List;
