/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TablePagination from '@material-ui/core/TablePagination';
import TablePaginationActions from './TablePaginationActions';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  container: {
    maxHeight: 440
  },
  tableRow: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.colors.tableBackgroundGray
    }
  }
}));

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
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

export default function TableKH(props) {
  const classes = useStyles();
  const {
    headers,
    defaultNumberofRows,
    rowsPerPageOptions,
    uniqueId,
    defaultOrder,
    defaultOrderBy,
    actionButtons,
    rows
  } = props;

  const [page, setPage] = React.useState(0);
  const [order, setOrder] = React.useState(defaultOrder);
  const [orderBy, setOrderBy] = React.useState(defaultOrderBy);
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultNumberofRows);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const createSortHandler = property => event => {
    handleRequestSort(event, property);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {headers.map(header => (
                <TableCell
                  // size="small"
                  key={header.id}
                  align={header.align}
                  style={{
                    minWidth: header.minWidth,
                    maxWidth: header.maxWidth
                  }}
                  sortDirection={orderBy === header.id ? order : false}
                >
                  {header.sort ? (
                    <TableSortLabel
                      // size="small"
                      active={orderBy === header.id}
                      style={{
                        minWidth: header.minWidth,
                        maxWidth: header.maxWidth
                      }}
                      direction={orderBy === header.id ? order : 'asc'}
                      onClick={createSortHandler(header.id)}
                    >
                      {header.label}
                    </TableSortLabel>
                  ) : (
                    header.label
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow className={classes.tableRow}>
                <TableCell size="small" colSpan={headers.length} align="center">
                  No records found
                </TableCell>
              </TableRow>
            ) : (
              stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow className={classes.tableRow} key={row[uniqueId]}>
                      {headers.map(header => {
                        const value = row[header.id];
                        if (header.id === 'actions')
                          return (
                            <TableCell
                              size="small"
                              key={header.id}
                              align={header.align}
                            >
                              {actionButtons(row)}
                            </TableCell>
                          );
                        return (
                          <TableCell
                            size="small"
                            key={header.id}
                            align={header.align}
                          >
                            {Array.isArray(value)
                              ? row[header.id].map(item => (
                                  <div key={item}>{item}</div>
                                ))
                              : `${row[header.id]}`}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
        colSpan={8}
        ActionsComponent={TablePaginationActions}
      />
    </Paper>
  );
}

TableKH.propTypes = {
  actionButtons: PropTypes.node,
  defaultNumberofRows: PropTypes.number,
  defaultOrder: PropTypes.oneOf(['asc', 'desc']),
  defaultOrderBy: PropTypes.string,
  headers: PropTypes.array.isRequired,
  rowsPerPageOptions: PropTypes.array,
  uniqueId: PropTypes.string,
  rows: PropTypes.array.isRequired
};

TableKH.defaultProps = {
  actionButtons: null,
  defaultOrder: 'asc',
  defaultNumberofRows: 25,
  rowsPerPageOptions: [25, 50, 100, { label: 'All', value: -1 }],
  uniqueId: 'id',
  defaultOrderBy: null
};
