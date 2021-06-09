import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm, FormProvider } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import Loading from '__SHARED__/Loading';
import ActionButtons from '__SHARED__/ActionButtons';
import Button from '__SHARED__/Button';
import {
  TextField,
  RadioField,
  DateField,
  FileUploadField
} from '__SHARED__/ReactHookForm';
import { urltoFile } from '__GLOBAL__/helpers';
import AddressCards from './AddressCard';
import AddEditAddress from '../Modals/AddEditAddress';

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    display: props => (props.files && props.files.length ? 'none' : 'flex')
  },
  picWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,10%)',
    color: theme.colors.white,
    textTransform: 'uppercase',
    textAlign: 'center',
    opacity: 0,
    transition: 'all .5s',
    backfaceVisibility: 'hidden'
  },
  profileWrap: {
    padding: '2rem',
    paddingTop: '8rem'
  },
  picDisplay: {
    width: '100%',
    backfaceVisibility: 'hidden',
    transition: 'all .5s',
    transform: 'scale(1.4)',
    height: '100%'
  },
  displayWrap: {
    width: 150,
    height: 150,
    clipPath: 'circle(50% at 50% 50%)',
    position: 'relative',
    margin: 0,
    '&:hover $text': {
      opacity: 1,
      transform: 'translate(-50%,-50%)'
    },
    '&:hover $picDisplay': {
      transform: 'scale(1)',
      filter: 'blur(3px) brightness(80%)'
    }
  }
}));

const Profile = props => {
  const {
    dataLoaded,
    data,
    getUserDetailsRequest,
    submitProfileRequest,
    changeProfilePicRequest,
    addPanelOpen,
    editPanelOpen
  } = props;
  const { handleSubmit, watch, reset, ...methods } = useForm({
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
  const files = watch('profilePic');
  const classes = styles({ ...props, files });

  useEffect(() => {
    getUserDetailsRequest();
  }, [getUserDetailsRequest]);

  useEffect(() => {
    if (data) {
      const base64Data = `data:image/webp;base64,${data.profilepic}`;
      urltoFile(base64Data, 'profilepic.webp', 'image/webp').then(res =>
        reset({ ...data, profilePic: [res] })
      );
    }
  }, [data, reset]);

  return (
    <React.Fragment>
      <Loading open={!dataLoaded} />
      <Grid container className={classes.container}>
        <FormProvider {...methods}>
          <Grid
            className={classes.profileWrap}
            component="form"
            onSubmit={handleSubmit(values =>
              submitProfileRequest({
                ...values,
                id: data._id,
                profilePic: undefined
              })
            )}
            container
            spacing={2}
          >
            <Grid item xs={6} className={classes.picWrap}>
              <FileUploadField
                className={classes.profilePic}
                message="Upload Pic"
                accept="image/png,image/jpg,image/jpeg,image/webp"
                name="profilePic"
                onChange={file => changeProfilePicRequest(file)}
                displayImage={
                  !!files?.length &&
                  files.map(file => (
                    <figure key={file.name} className={classes.displayWrap}>
                      <img
                        className={classes.picDisplay}
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                      />
                      <figcaption className={classes.text}>
                        Change Photo
                      </figcaption>
                    </figure>
                  ))
                }
              />
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="First name"
                    name="firstname"
                    id="firstname"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Last name"
                    name="lastname"
                    id="lastname"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Username"
                    name="username"
                    id="username"
                    disabled
                    required
                  />
                </Grid>
                <Grid item xs={12}>
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
              </Grid>
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
                      submitProfileRequest({
                        ...values,
                        id: data._id,
                        profilePic: undefined
                      })
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
  changeProfilePicRequest: PropTypes.func.isRequired,
  editPanelOpen: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
  getUserDetailsRequest: PropTypes.func.isRequired,
  submitProfileRequest: PropTypes.func.isRequired
};
Profile.defaultProps = {};

export default Profile;
