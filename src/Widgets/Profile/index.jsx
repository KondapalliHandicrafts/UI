import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormProvider, useForm } from 'react-hook-form';
import { Grid, InputAdornment } from '@mui/material';
import { useSelector } from 'react-redux';
import { ActionButtons, Button, Loading } from '../../SharedJSX';
import {
  DateField,
  RadioField,
  TextField
} from '../../SharedJSX/ReactHookForm';
import AddressCards from './AddressCard';
import AddEditAddress from './AddEditAddress';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  buttons: {
    textTransform: 'none'
  },
  profileWrap: {
    padding: '2rem',
    paddingTop: '8rem'
  }
};

const Profile = props => {
  const {
    data,
    getUserDetailsRequest,
    submitProfileRequest,
    addPanelOpen,
    editPanelOpen
  } = props;
  const dataLoading = useSelector(state => state.routing.dataLoading);

  const { handleSubmit, reset, ...methods } = useForm({
    mode: 'onTouched',
    defaultValues: {
      username: '',
      lastname: '',
      gender: '',
      dateOfBirth: '',
      email: '',
      mobile: '',
      firstname: ''
    }
  });

  useEffect(() => {
    getUserDetailsRequest();
  }, []);

  useEffect(() => {
    if (data) reset(data);
  }, [data]);

  return (
    <React.Fragment>
      <Loading open={!dataLoading} />
      <Grid container sx={styles.container}>
        <FormProvider {...methods}>
          <Grid
            sx={styles.profileWrap}
            component="form"
            onSubmit={handleSubmit(values =>
              submitProfileRequest({ ...values, id: data._id })
            )}
            container
            spacing={2}
          >
            <Grid item xs={6}>
              <TextField
                label="First name"
                name="firstname"
                id="firstname"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last name"
                name="lastname"
                id="lastname"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Username"
                name="username"
                id="username"
                disabled
                required
              />
            </Grid>
            <Grid item xs={6}>
              <RadioField
                name="gender"
                id="gender"
                groupLabel="Gender"
                options={[
                  { label: 'Male', value: 'Male' },
                  { label: 'Female', value: 'Female' },
                  { label: 'Other', value: 'Other' }
                ]}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <DateField
                id="dob"
                name="dateOfBirth"
                disableFuture
                openTo="year"
                label="Date of birth"
                views={['year', 'month', 'date']}
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
                label="Email"
                name="email"
                id="email"
                type="email"
                required
              />
            </Grid>
            {data && <AddressCards {...props} />}
            <Grid item xs={12}>
              <ActionButtons
                buttons={[
                  <Button
                    key={1}
                    onClick={handleSubmit(values =>
                      submitProfileRequest({ ...values, id: data._id })
                    )}
                  >
                    Submit
                  </Button>
                ]}
              />
            </Grid>
          </Grid>
        </FormProvider>
      </Grid>
      {addPanelOpen && <AddEditAddress isAdd {...props} />}
      {editPanelOpen && <AddEditAddress isAdd={false} {...props} />}
    </React.Fragment>
  );
};

Profile.propTypes = {
  addPanelOpen: PropTypes.bool.isRequired,
  editPanelOpen: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
  getUserDetailsRequest: PropTypes.func.isRequired,
  submitProfileRequest: PropTypes.func.isRequired
};

export default Profile;
