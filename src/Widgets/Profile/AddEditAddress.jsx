import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Grid, InputAdornment } from '@mui/material';
import {
  CheckField,
  SelectField,
  TextField
} from '../../SharedJSX/ReactHookForm';
import { Button, Dialog } from '../../SharedJSX';
import { states } from '../../Global/constants';

const AddEditAddress = props => {
  const {
    isAdd,
    item = null,
    addPanelOpen,
    editPanelOpen,
    addAddressRequest,
    editAddressRequest
  } = props;
  const { handleSubmit, reset, ...methods } = useForm({
    mode: 'onTouched',
    defaultValues: {
      fullName: '',
      mobile: '',
      houseNo: '',
      area: '',
      city: '',
      state: '',
      pincode: '',
      isDefault: false
    }
  });

  useEffect(() => {
    if (!isAdd) reset(item);
  }, []);

  const onClose = () => {
    // if (isAdd) toggleDialog(ADD_ADDRESS, false);
    // else toggleDialog(EDIT_ADDRESS, false);
  };

  const submitAddress = values => {
    if (isAdd) addAddressRequest(values);
    else editAddressRequest({ ...values, id: item._id });
    onClose();
  };

  return (
    <Dialog
      closeButton
      onClose={onClose}
      open={isAdd ? addPanelOpen : editPanelOpen}
      title={isAdd ? 'Add Address' : 'Edit Address'}
      buttons={[
        <Button key={1} onClick={handleSubmit(submitAddress)}>
          Submit
        </Button>,
        <Button key={2} onClick={onClose}>
          Cancel
        </Button>
      ]}
    >
      <FormProvider {...methods}>
        <Grid container spacing={2}>
          <Grid
            component="form"
            onSubmit={handleSubmit(submitAddress)}
            item
            xs={6}
          >
            <TextField
              label="Fullname"
              name="fullName"
              id="fullName"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="mobile"
              name="mobile"
              label="Mobile"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91 </InputAdornment>
                )
              }}
              rules={{
                validate: {
                  maxLength: value =>
                    value.length === 10 || 'Provide valid mobile number'
                }
              }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Flat/House no"
              name="houseNo"
              id="houseNo"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Area, Colony, Street"
              name="area"
              id="area"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Landmark"
              name="landmark"
              id="landmark"
              required
            />
          </Grid>
          <Grid item xs={4}>
            <TextField label="City" name="city" id="city" required />
          </Grid>
          <Grid item xs={4}>
            <SelectField
              label="State"
              name="state"
              id="state"
              options={states}
              required
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Pin Code"
              name="pincode"
              id="pincode"
              type="number"
              required
            />
          </Grid>
          <Grid item xs={4}>
            <CheckField
              label="Default address"
              name="isDefault"
              id="defaultAddress"
            />
          </Grid>
        </Grid>
      </FormProvider>
    </Dialog>
  );
};

AddEditAddress.propTypes = {
  item: PropTypes.object,
  addAddressRequest: PropTypes.bool.isRequired,
  addPanelOpen: PropTypes.bool.isRequired,
  editAddressRequest: PropTypes.bool.isRequired,
  editPanelOpen: PropTypes.bool.isRequired,
  isAdd: PropTypes.bool.isRequired
};

export default AddEditAddress;
