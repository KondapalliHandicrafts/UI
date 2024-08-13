import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { ExpandMoreIcon, FirstPageIcon, LastPageIcon } from './SVG';
import IconButton from './IconButton';

const TablePaginationActions = props => {
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = event => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = event => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0 }}>
      <IconButton
        aria-label="first page"
        disabled={page === 0}
        onClick={handleFirstPageButtonClick}
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        aria-label="previous page"
        disabled={page === 0}
        onClick={handleBackButtonClick}
      >
        <ExpandMoreIcon direction="left" />
      </IconButton>
      <IconButton
        aria-label="next page"
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        onClick={handleNextButtonClick}
      >
        <ExpandMoreIcon direction="right" />
      </IconButton>
      <IconButton
        aria-label="last page"
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        onClick={handleLastPageButtonClick}
      >
        <LastPageIcon />
      </IconButton>
    </Box>
  );
};

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

export default TablePaginationActions;
