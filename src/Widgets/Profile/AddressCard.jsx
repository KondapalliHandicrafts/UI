import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import { ActionButtons, Button, Card, Confirmation } from '../../SharedJSX';
import { AddIcon } from '../../SharedJSX/SVG';

const styles = {
  buttons: {
    textTransform: 'none'
  }
};

const AddressCards = props => {
  const { data, deleteAddressRequest, defaultAddressRequest } = props;

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <ActionButtons
          buttons={[
            <Button
              startIcon={<AddIcon />}
              key={1}
              // onClick={() => toggleDialog(ADD_ADDRESS, true)}
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
                sx={styles.buttons}
                variant="outlined"
                size="small"
                key={1}
                onClick={() => {
                  // toggleDialog(EDIT_ADDRESS, { value: true, item });
                }}
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
                  sx={styles.buttons}
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
  deleteAddressRequest: PropTypes.func.isRequired
};

export default AddressCards;
