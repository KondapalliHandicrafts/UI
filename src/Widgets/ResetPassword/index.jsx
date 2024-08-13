import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { securityQuestions } from '__GLOBAL__/constants';
import { useSelector } from 'react-redux';
import { Button, Loading, Paper, RouteLink } from '../../SharedJSX';
import { SelectField, TextField } from '../../SharedJSX/ReactHookForm';
import { SubmitIcon } from '../../SharedJSX/SVG';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flex: 1
  },
  resetWrap: {
    maxWidth: '700px'
  },
  submitBtn: {
    textAlign: 'right'
  }
};

const ResetPassword = props => {
  const { verifyResetID, resetPasswordRequest, userdata, isSuccess } = props;
  const dataLoading = useSelector(state => state.routing.dataLoading);
  const { id } = useParams();
  const { handleSubmit, watch, setValue, reset, ...methods } = useForm({
    mode: 'onTouched',
    defaultValues: {
      password: '',
      confirmPassword: '',
      secAns1: '',
      secAns2: '',
      secQue1: '',
      secQue2: ''
    }
  });

  useEffect(() => {
    verifyResetID(id);
  }, [id]);

  useEffect(() => {
    if (userdata) {
      setValue('secQue1', userdata.secQue1);
      setValue('secQue2', userdata.secQue2);
    }
  }, [userdata]);

  const message = isSuccess ? (
    <Grid>
      Password has been updated Successfully. Please{' '}
      <RouteLink href="/login">click here</RouteLink> to Login
    </Grid>
  ) : (
    <Grid>
      Token is expired please go through forgot password again..! Token is valid
      for only {userdata ? userdata.resetTime / (60 * 60) : null} mintues
    </Grid>
  );
  return (
    <React.Fragment>
      <Loading open={!dataLoading} />
      <Grid sx={styles.container}>
        {userdata ? (
          <Paper elevation={4}>
            <FormProvider {...methods}>
              <Grid
                component="form"
                container
                onSubmit={handleSubmit(values =>
                  resetPasswordRequest(values, id)
                )}
                spacing={2}
                sx={styles.resetWrap}
              >
                <Grid item xs={12}>
                  <TextField
                    id="password"
                    label="Password"
                    name="password"
                    required
                    type="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="confirmPassword"
                    label="Confirm Password"
                    name="confirmPassword"
                    required
                    rules={{
                      validate: {
                        confirmPassword: value =>
                          watch('password') === value ||
                          "Password's didn't match"
                      }
                    }}
                    type="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <SelectField
                    disabled
                    id="secques1"
                    label="Security Question 1"
                    name="secQue1"
                    options={securityQuestions}
                    required
                    rules={{
                      validate: {
                        different: value =>
                          watch('secQue2') !== value ||
                          'Question already selected'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="secans1"
                    label="Security Answer 1"
                    name="secAns1"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <SelectField
                    disabled
                    id="secques2"
                    label="Security Question 2"
                    name="secQue2"
                    options={securityQuestions}
                    required
                    rules={{
                      validate: {
                        different: value =>
                          watch('secQue1') !== value ||
                          'Question already selected'
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="secans2"
                    label="Security Answer 2"
                    name="secAns2"
                    required
                  />
                </Grid>
                <Grid item sx={styles.submitBtn} xs={12}>
                  <Button
                    onClick={handleSubmit(values =>
                      resetPasswordRequest(values, id)
                    )}
                    startIcon={<SubmitIcon />}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </FormProvider>
          </Paper>
        ) : (
          message
        )}
      </Grid>
    </React.Fragment>
  );
};

ResetPassword.propTypes = {
  isSuccess: PropTypes.bool.isRequired,
  resetPasswordRequest: PropTypes.func.isRequired,
  userdata: PropTypes.object.isRequired,
  verifyResetID: PropTypes.func.isRequired
};

export default ResetPassword;
