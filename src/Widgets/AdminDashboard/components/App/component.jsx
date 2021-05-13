import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Loading from '__SHARED__/Loading';
import Table from '__SHARED__/Table';
import Button from '__SHARED__/Button';
import ActionButtons from '__SHARED__/ActionButtons';
import Confirmation from '__SHARED__/Confirmation';
import { AddIcon } from '__SHARED__/SVG';
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
    padding: '0.2rem'
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
    editPanelOpen
  } = props;

  const classes = styles(props);
  useEffect(() => {
    getCardsData();
  }, []);

  return (
    <React.Fragment>
      <Loading open={!dataLoaded} />
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={12}>
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
            rows={data}
            uniqueId="id"
            defaultOrderBy="itemName"
            actionButtons={row => [
              <Button
                key={1}
                className={classes.editBtn}
                onClick={() =>
                  toggleDialog(EDIT_CARD, { value: true, item: row })
                }
              >
                Edit
              </Button>,
              <Confirmation
                key={2}
                buttonProps={{ variant: 'outlined', size: 'small' }}
                buttonText="Remove"
                message="Are you sure to delete address?"
                okOnClick={() => deleteCardRequest(row._id)}
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
  adminDashboardLoader: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
  deleteCardRequest: PropTypes.func.isRequired,
  editPanelOpen: PropTypes.bool.isRequired,
  getCardsData: PropTypes.func.isRequired,
  toggleDialog: PropTypes.func.isRequired
};
AdminDashboard.defaultProps = {};

export default AdminDashboard;
