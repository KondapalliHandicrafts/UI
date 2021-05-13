import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '__SHARED__/Button';
import ActionButtons from '__SHARED__/ActionButtons';
import Card from '__SHARED__/Card';
import { AddIcon } from '__SHARED__/SVG';
import Confirmation from '__SHARED__/Confirmation';
import { ADD_ADDRESS, EDIT_ADDRESS } from '__GLOBAL__/constants';

const styles = makeStyles(() => ({
  buttons: {
    textTransform: 'none'
  }
}));

const AddressCards = props => {
  const {
    data,
    toggleDialog,
    deleteAddressRequest,
    defaultAddressRequest
  } = props;
  const classes = styles(props);
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <ActionButtons
          buttons={[
            <Button
              startIcon={<AddIcon />}
              key={1}
              onClick={() => toggleDialog(ADD_ADDRESS, true)}
            >
              Add Address
            </Button>
          ]}
        />
      </Grid>
      {data.addresses.map(item => (
        <Grid key={item._id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card
            title={item.fullName}
            buttons={[
              <Button
                className={classes.buttons}
                variant="outlined"
                size="small"
                key={1}
                onClick={() =>
                  toggleDialog(EDIT_ADDRESS, { value: true, item })
                }
              >
                Edit
              </Button>,
              <Confirmation
                key={2}
                buttonProps={{ variant: 'outlined', size: 'small' }}
                buttonText="Remove"
                message="Are you sure to delete address?"
                okOnClick={() => deleteAddressRequest(item._id)}
              />,
              !item.isDefault && (
                <Button
                  className={classes.buttons}
                  size="small"
                  variant="outlined"
                  key={3}
                  onClick={() => defaultAddressRequest(item._id)}
                >
                  Set default
                </Button>
              )
            ]}
          >
            <Typography component="p" variant="caption">
              {item.houseNo}, {item.area}
            </Typography>
            <Typography component="p" variant="caption">
              {item.city}, {item.state} - {item.pincode}
            </Typography>
            <Typography component="p" variant="caption">
              India
            </Typography>
            <Typography component="p" variant="caption">
              Phone Number: {item.mobile}
            </Typography>
          </Card>
        </Grid>
      ))}
    </React.Fragment>
  );
};

AddressCards.propTypes = {
  data: PropTypes.object.isRequired,
  defaultAddressRequest: PropTypes.func.isRequired,
  deleteAddressRequest: PropTypes.func.isRequired,
  toggleDialog: PropTypes.func.isRequired
};

AddressCards.defautProps = {};

export default AddressCards;
