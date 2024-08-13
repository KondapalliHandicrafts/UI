import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Collapse,
  Table as MuiTable,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import TablePaginationActions from './TablePaginationActions';
import IconButton from './IconButton';
import { ExpandMoreIcon } from './SVG';
import { formatDate } from '../Global/utils';

const styles = {
  tableHead: {
    backgroundColor: 'secondary.main',
    color: 'common.white'
  },
  sortStyles: {
    '&.Mui-active': {
      color: 'common.white',
      '& .MuiTableSortLabel-icon': {
        color: 'common.white'
      }
    }
  },
  tableRow: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'action.hover'
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }
};

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getValue(header, value) {
  if (header.type === 'bool') return value ? 'Yes' : 'No';
  if (header.type === 'date') return formatDate(value);
  if (header.filter) return header.filter(value);
  return value;
}

const Table = props => {
  const {
    rows,
    headers,
    uniqueId = 'id',
    actionButtons,
    indexs = [],
    indexItems = null,
    size = 'small',
    isCollapsable = false,
    maxHeight = 440,
    defaultRowsPerPage = 15,
    defaultOrder = 'asc',
    collapasableContent = null,
    hasPagination = false,
    defaultOrderBy = 'id'
  } = props;
  const [page, setPage] = React.useState(0);
  const [order, setOrder] = React.useState(defaultOrder);
  const [orderBy, setOrderBy] = React.useState(defaultOrderBy);
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage);
  const [controllerId, setControllerId] = React.useState('');
  const [collapseOpen, setCollpaseOpen] = React.useState(false);

  const headerLength = isCollapsable ? headers.length + 1 : headers.length;
  const rowsCondition =
    rowsPerPage < 0 ? rows.length : page * rowsPerPage + rowsPerPage;
  const rowLength = hasPagination ? rowsCondition : rows.length;

  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        rowLength
      ),
    [order, orderBy, page, rowLength, rows, rowsPerPage]
  );

  const handleRowClick = React.useCallback(
    row => {
      if (isCollapsable) {
        if (controllerId !== row[uniqueId]) {
          setControllerId(row[uniqueId]);
          setCollpaseOpen(true);
        } else setCollpaseOpen(!collapseOpen);
      }
    },
    [collapseOpen, controllerId, isCollapsable, uniqueId]
  );

  const handleRequestSort = property => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Paper elevation={3} sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight }}>
        <MuiTable aria-label="sticky table" size={size} stickyHeader>
          <TableHead>
            <TableRow>
              {headers.map(header => (
                <TableCell
                  key={header.id}
                  align={header.align}
                  sx={[
                    styles.tableHead,
                    {
                      minWidth: header.minWidth,
                      maxWidth: header.maxWidth,
                      width: header.width
                    }
                  ]}
                >
                  {header.sort ? (
                    <TableSortLabel
                      active={orderBy === header.id}
                      direction={orderBy === header.id ? order : 'asc'}
                      onClick={() => handleRequestSort(header.id)}
                      sx={[styles.sortStyles, header.sortStyles]}
                    >
                      {header.label}
                      {orderBy === header.id ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === 'desc'
                            ? 'sorted descending'
                            : 'sorted ascending'}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  ) : (
                    header.label
                  )}
                </TableCell>
              ))}
              {isCollapsable ? (
                <TableCell
                  align="center"
                  size={size}
                  sx={[styles.tableHead, { width: '50px' }]}
                />
              ) : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.length ? (
              visibleRows.map((row, rowIndex) => {
                return (
                  <React.Fragment key={row[uniqueId]}>
                    <TableRow
                      key={row[uniqueId]}
                      onClick={() => handleRowClick(row)}
                      sx={styles.tableRow}
                    >
                      {headers.map((header, headerIndex) => {
                        const value = row[header.id];
                        if (header.id === 'actions')
                          return (
                            <TableCell key={header.id} align={header.align}>
                              {actionButtons(row)}
                            </TableCell>
                          );
                        if (indexs.includes(headerIndex))
                          return (
                            <TableCell key={header.id} align={header.align}>
                              {indexItems(row, header, rowIndex, headerIndex)}
                            </TableCell>
                          );
                        return (
                          <TableCell key={header.id} align={header.align}>
                            {getValue(header, value)}
                          </TableCell>
                        );
                      })}
                      {isCollapsable ? (
                        <TableCell>
                          <IconButton size="small">
                            <ExpandMoreIcon
                              direction={
                                collapseOpen && controllerId === row[uniqueId]
                                  ? 'up'
                                  : 'down'
                              }
                            />
                          </IconButton>
                        </TableCell>
                      ) : null}
                    </TableRow>
                    {isCollapsable && controllerId === row[uniqueId] ? (
                      <TableRow>
                        <TableCell colSpan={headerLength} sx={{ py: 0 }}>
                          <Collapse
                            in={collapseOpen}
                            timeout="auto"
                            unmountOnExit
                          >
                            {collapasableContent
                              ? collapasableContent(row, rowIndex)
                              : null}
                          </Collapse>
                        </TableCell>
                      </TableRow>
                    ) : null}
                  </React.Fragment>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={headerLength} sx={{ textAlign: 'center' }}>
                  No records found
                </TableCell>
              </TableRow>
            )}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: (size === 'small' ? 33 : 53) * emptyRows
                }}
              >
                <TableCell colSpan={headerLength} />
              </TableRow>
            )}
          </TableBody>
        </MuiTable>
      </TableContainer>
      {hasPagination ? (
        <TablePagination
          ActionsComponent={TablePaginationActions}
          colSpan={headerLength}
          component="div"
          count={rows.length}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[10, 15, 25, 50, { label: 'All', value: -1 }]}
          slotProps={{
            select: {
              inputProps: {
                'aria-label': 'rows per page'
              },
              native: true
            }
          }}
        />
      ) : null}
    </Paper>
  );
};

Table.propTypes = {
  actionButtons: PropTypes.func.isRequired,
  collapasableContent: PropTypes.func,
  defaultOrder: PropTypes.string,
  defaultOrderBy: PropTypes.string,
  defaultRowsPerPage: PropTypes.number,
  hasPagination: PropTypes.bool,
  headers: PropTypes.array.isRequired,
  indexItems: PropTypes.func,
  indexs: PropTypes.array,
  isCollapsable: PropTypes.bool,
  maxHeight: PropTypes.number,
  rows: PropTypes.array.isRequired,
  size: PropTypes.string,
  uniqueId: PropTypes.string
};

export default Table;
