import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Loading from '__SHARED__/Loading';
import Table from '__SHARED__/Table';
import Button from '__SHARED__/Button';
import IconButton from '__SHARED__/IconButton';
import ActionButtons from '__SHARED__/ActionButtons';
import Confirmation from '__SHARED__/Confirmation';
import { AddIcon, EditIcon, DeleteIcon } from '__SHARED__/SVG';
import { ADD_CARD, EDIT_CARD } from '__GLOBAL__/constants';
import { headers } from '../../_helpers/constants';
import AddEditCard from '../Modals/AddEditCard';

const styles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '7rem'
  },
  editBtn: {
    padding: '0.2rem',
    marginRight: '1rem'
  },
  textField: {
    marginLeft: '2rem'
  }
}));

const AdminDashboard = props => {
  const {
    data,
    dataLoaded,
    toggleDialog,
    getCardsData,
    addPanelOpen,
    deleteCardRequest,
    editPanelOpen,
    isAdmin
  } = props;
  const [searchValue, setSearchValue] = useState('');

  const classes = styles(props);
  useEffect(() => {
    getCardsData(isAdmin);
  }, [getCardsData, isAdmin]);

  return (
    <React.Fragment>
      <Loading open={!dataLoaded} />
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={4}>
          <TextField
            className={classes.textField}
            variant="outlined"
            type="text"
            label="Search Title"
            id="search"
            size="small"
            onChange={e => setSearchValue(e.target.value.toLowerCase())}
            value={searchValue}
          />
        </Grid>
        <Grid item xs={8}>
          <ActionButtons
            buttons={[
              <Button
                startIcon={<AddIcon />}
                key={1}
                onClick={() => toggleDialog(ADD_CARD, true)}
              >
                Add Card
              </Button>
            ]}
          />
        </Grid>
        <Grid item xs={12}>
          <Table
            headers={headers}
            rows={data.filter(item =>
              item.title.toLowerCase().includes(searchValue)
            )}
            uniqueId="id"
            defaultOrderBy="itemName"
            actionButtons={row => [
              <IconButton
                key={1}
                className={classes.editBtn}
                onClick={() =>
                  toggleDialog(EDIT_CARD, { value: true, item: row })
                }
                icon={<EditIcon />}
              />,
              <Confirmation
                key={2}
                isIcon
                buttonProps={{
                  size: 'small',
                  icon: <DeleteIcon />
                }}
                message="Are you sure to delete address?"
                okOnClick={() => deleteCardRequest(row._id, isAdmin)}
              />
            ]}
          />
        </Grid>
      </Grid>
      {addPanelOpen && <AddEditCard isAdd {...props} />}
      {editPanelOpen && <AddEditCard isAdd={false} {...props} />}
    </React.Fragment>
  );
};

AdminDashboard.propTypes = {
  addPanelOpen: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
  deleteCardRequest: PropTypes.func.isRequired,
  editPanelOpen: PropTypes.bool.isRequired,
  getCardsData: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  toggleDialog: PropTypes.func.isRequired
};
AdminDashboard.defaultProps = {};

export default AdminDashboard;
