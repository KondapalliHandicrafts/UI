import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import Grid from '@mui/material';
import { TextField } from '../../SharedJSX/ReactHookForm';
import { Button, Loading, Paper } from '../../SharedJSX';
import { SubmitIcon } from '../../SharedJSX/SVG';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  message: {
    color: props =>
      props.curPasswordStatus === 200 ? 'colors.success' : 'colors.error'
  },
  changePasswordWrap: {
    maxWidth: '700px'
  },
  submitBtn: {
    textAlign: 'right'
  }
};

const ChangePassword = props => {
  const {
    changePasswordRequest,
    checkCurPasswordRequest,
    curPasswordStatus,
    curPasswordmessage
  } = props;
  const dataLoading = useSelector(state => state.routing.dataLoading);

  const { handleSubmit, watch, setValue, reset, ...methods } = useForm({
    mode: 'onTouched',
    defaultValues: {
      curPassword: '',
      password: '',
      confirmPassword: ''
    }
  });

  return (
    <React.Fragment>
      <Loading open={dataLoading} />
      <Grid container sx={styles.container}>
        <Paper elevation={4}>
          <FormProvider {...methods}>
            <Grid
              sx={styles.changePasswordWrap}
              component="form"
              onSubmit={handleSubmit(changePasswordRequest)}
              container
              spacing={2}
            >
              <Grid item xs={12}>
                <TextField
                  label="Current Password"
                  name="curPassword"
                  id="curPassword"
                  onBlur={() => checkCurPasswordRequest(watch('curPassword'))}
                  type="password"
                  helperText={
                    <Grid component="span" sx={styles.message}>
                      {curPasswordmessage}
                    </Grid>
                  }
                  error={curPasswordStatus === 400}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  name="password"
                  id="password"
                  type="password"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  id="confirmPassword"
                  type="password"
                  rules={{
                    validate: {
                      confirmPassword: value =>
                        watch('password') === value || "Password's didn't match"
                    }
                  }}
                  required
                />
              </Grid>
              <Grid sx={styles.submitBtn} item xs={12}>
                <Button
                  startIcon={<SubmitIcon />}
                  type="submit"
                  onClick={handleSubmit(changePasswordRequest)}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </FormProvider>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

ChangePassword.propTypes = {
  dataLoaded: PropTypes.bool.isRequired,
  changePasswordRequest: PropTypes.func.isRequired,
  checkCurPasswordRequest: PropTypes.func.isRequired,
  curPasswordmessage: PropTypes.string.isRequired,
  curPasswordStatus: PropTypes.number.isRequired
};

export default ChangePassword;
