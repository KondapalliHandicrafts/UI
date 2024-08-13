import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import {
  ActionButtons,
  Button,
  Confirmation,
  Loading,
  Table
} from '../../SharedJSX';
import { AddIcon } from '../../SharedJSX/SVG';
import { headers } from './constants';
import AddEditCard from './AddEditCard';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '7rem'
  },
  editBtn: {
    padding: '0.2rem'
  }
};

const AdminDashboard = props => {
  const { data, getCardsData, addPanelOpen, deleteCardRequest, editPanelOpen } =
    props;

  const dataLoading = useSelector(state => state.routing.dataLoading);
  useEffect(() => {
    getCardsData();
  }, []);

  return (
    <React.Fragment>
      <Loading open={!dataLoading} />
      <Grid container sx={styles.container} spacing={2}>
        <Grid item xs={12}>
          <ActionButtons
            buttons={[
              <Button
                startIcon={<AddIcon />}
                key={1}
                // onClick={() => toggleDialog(ADD_CARD, true)}
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
                sx={styles.editBtn}
                onClick={() => {
                  // toggleDialog(EDIT_CARD, { value: true, item: row })
                }}
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
  deleteCardRequest: PropTypes.func.isRequired,
  editPanelOpen: PropTypes.bool.isRequired,
  getCardsData: PropTypes.func.isRequired,
  toggleDialog: PropTypes.func.isRequired
};

export default AdminDashboard;
