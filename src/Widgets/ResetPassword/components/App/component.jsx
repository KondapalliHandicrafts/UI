import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { securityQuestions, paths } from '__GLOBAL__/constants';
import Loading from '__SHARED__/Loading';
import Button from '__SHARED__/Button';
import RouteLink from '__SHARED__/RouteLink';
import Paper from '__SHARED__/Paper';
import { TextField, SelectField } from '__SHARED__/ReactHookForm';
import { SubmitIcon } from '__SHARED__/SVG';

const styles = makeStyles(() => ({
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
}));

const ResetPassword = props => {
  const {
    dataLoaded,
    verifyResetID,
    resetPasswordRequest,
    userdata,
    showSuccessMessage
  } = props;
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
  }, [id, verifyResetID]);

  useEffect(() => {
    if (userdata) {
      setValue('secQue1', userdata.secQue1);
      setValue('secQue2', userdata.secQue2);
    }
  }, [userdata, setValue]);

  const classes = styles(props);
  const message = showSuccessMessage ? (
    <Grid>
      Password has been updated Successfully. Please{' '}
      <RouteLink href={paths.login}>click here</RouteLink> to Login
    </Grid>
  ) : (
    <Grid>
      Token is expired please go through forgot password again..! Token is valid
      for only {userdata && userdata.resetTime / (60 * 60)} mintues
    </Grid>
  );
  return (
    <React.Fragment>
      <Loading open={!dataLoaded} />
      <Grid className={classes.container}>
        {userdata ? (
          <Paper elevation={4}>
            <FormProvider {...methods}>
              <Grid
                className={classes.resetWrap}
                component="form"
                onSubmit={handleSubmit(values =>
                  resetPasswordRequest(values, id)
                )}
                container
                spacing={2}
              >
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
                          watch('password') === value ||
                          "Password's didn't match"
                      }
                    }}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <SelectField
                    name="secQue1"
                    label="Security Question 1"
                    id="secques1"
                    disabled
                    rules={{
                      validate: {
                        different: value =>
                          watch('secQue2') !== value ||
                          'Question already selected'
                      }
                    }}
                    options={securityQuestions}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Security Answer 1"
                    name="secAns1"
                    id="secans1"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <SelectField
                    name="secQue2"
                    label="Security Question 2"
                    disabled
                    id="secques2"
                    rules={{
                      validate: {
                        different: value =>
                          watch('secQue1') !== value ||
                          'Question already selected'
                      }
                    }}
                    options={securityQuestions}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Security Answer 2"
                    name="secAns2"
                    id="secans2"
                    required
                  />
                </Grid>
                <Grid className={classes.submitBtn} item xs={12}>
                  <Button
                    startIcon={<SubmitIcon />}
                    type="submit"
                    onClick={handleSubmit(values =>
                      resetPasswordRequest(values, id)
                    )}
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
  verifyResetID: PropTypes.func.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
  resetPasswordRequest: PropTypes.func.isRequired,
  showSuccessMessage: PropTypes.bool.isRequired,
  userdata: PropTypes.object.isRequired
};
ResetPassword.defaultProps = {};

export default ResetPassword;
