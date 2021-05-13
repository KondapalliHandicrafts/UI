import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '__SHARED__/Paper';
import { useForm, FormProvider } from 'react-hook-form';
import { securityQuestions } from '__GLOBAL__/constants';
import Loading from '__SHARED__/Loading';
import Button from '__SHARED__/Button';
import RouteLink from '__SHARED__/RouteLink';
import { TextField, SelectField } from '__SHARED__/ReactHookForm';
import { SubmitIcon } from '__SHARED__/SVG';

const styles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '6rem',
    flex: 1
  },
  registerWrap: {
    maxWidth: 700
  },
  actionButtons: {
    display: 'flex'
  },
  signinBtn: {
    marginLeft: '2rem'
  },
  signupBtn: {
    marginLeft: 'auto',
    marginRight: '2rem'
  }
}));

const Register = props => {
  const { dataLoaded, registerUserRequest } = props;
  const { handleSubmit, watch, ...methods } = useForm({
    mode: 'onTouched',
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      secAns1: '',
      secAns2: '',
      secQue1: '',
      secQue2: ''
    }
  });

  const classes = styles(props);
  return (
    <React.Fragment>
      <Loading open={!dataLoaded} />
      <Grid className={classes.container}>
        <Paper elevation={4}>
          <FormProvider {...methods}>
            <Grid
              className={classes.registerWrap}
              component="form"
              onSubmit={handleSubmit(registerUserRequest)}
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
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Mobile"
                  name="mobile"
                  id="mobile"
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
              <Grid item xs={12}>
                <SelectField
                  name="secQue1"
                  label="Security Question 1"
                  id="secques1"
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

              <Grid className={classes.actionButtons} item xs={12}>
                <RouteLink className={classes.signinBtn} to="/login">
                  Already have account? Signin here!
                </RouteLink>
                <Button
                  startIcon={<SubmitIcon />}
                  className={classes.signupBtn}
                  type="submit"
                  onClick={handleSubmit(registerUserRequest)}
                >
                  Signup
                </Button>
              </Grid>
            </Grid>
          </FormProvider>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

Register.propTypes = {
  dataLoaded: PropTypes.bool.isRequired,
  registerUserRequest: PropTypes.func.isRequired
};
Register.defaultProps = {};

export default Register;
