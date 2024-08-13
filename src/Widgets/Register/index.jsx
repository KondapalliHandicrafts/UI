import React from 'react';
import { Grid, InputAdornment } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Loading, Paper, RouteLink } from '../../SharedJSX';
import { securityQuestions } from '../../Global/constants';
import { SelectField, TextField } from '../../SharedJSX/ReactHookForm';
import { SubmitIcon } from '../../SharedJSX/SVG';
import { registerUser } from './registerSlice';

const styles = {
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
};

const Register = () => {
  const dispatch = useDispatch();
  const dataLoading = useSelector(state => state.routing.dataLoading);

  const { handleSubmit, watch, ...methods } = useForm({
    mode: 'onTouched',
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      secAns1: '',
      secAns2: '',
      secQue1: securityQuestions[0],
      secQue2: securityQuestions[1]
    }
  });

  const submitUser = values => dispatch(registerUser(values));

  return (
    <React.Fragment>
      <Loading open={!dataLoading} />
      <Grid sx={styles.container}>
        <Paper elevation={4}>
          <FormProvider {...methods}>
            <Grid
              component="form"
              container
              onSubmit={handleSubmit(submitUser)}
              spacing={2}
              sx={styles.registerWrap}
            >
              <Grid item xs={6}>
                <TextField
                  id="firstname"
                  label="First name"
                  name="firstname"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="lastname"
                  label="Last name"
                  name="lastname"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="username"
                  label="Username"
                  name="username"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="mobile"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+91 </InputAdornment>
                    )
                  }}
                  label="Mobile"
                  name="mobile"
                  required
                  rules={{
                    validate: {
                      maxLength: value =>
                        value.length === 10 || 'Provide valid mobile number'
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="Email"
                  name="email"
                  required
                  type="email"
                />
              </Grid>
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
                        watch('password') === value || "Password's didn't match"
                    }
                  }}
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <SelectField
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

              <Grid item sx={styles.actionButtons} xs={12}>
                <RouteLink sx={styles.signinBtn} to="/login">
                  Already have account? Signin here!
                </RouteLink>
                <Button
                  onClick={handleSubmit(submitUser)}
                  startIcon={<SubmitIcon />}
                  sx={styles.signupBtn}
                  type="submit"
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

Register.propTypes = {};

export default Register;
