import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginIcon, SignupIcon } from '../../SharedJSX/SVG';
import { TextField } from '../../SharedJSX/ReactHookForm';
import { Button, Loading, Paper, RouteLink } from '../../SharedJSX';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  loginWrap: {
    maxWidth: '700px'
  },
  loginBtn: {
    marginLeft: 'auto',
    marginRight: '2rem'
  },
  forogtPassword: {
    marginLeft: '2rem'
  },
  actionButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
};

const Login = props => {
  const { loginRequest } = props;

  const dataLoading = useSelector(state => state.routing.dataLoading);
  const naviagate = useNavigate();
  const { handleSubmit, ...methods } = useForm({
    mode: 'onTouched',
    defaultValues: {
      username: '',
      password: ''
    }
  });

  return (
    <React.Fragment>
      <Loading open={!dataLoading} />
      <Grid sx={styles.container}>
        <Paper elevation={4}>
          <FormProvider {...methods}>
            <Grid
              component="form"
              container
              onSubmit={handleSubmit(loginRequest)}
              spacing={2}
              sx={styles.loginWrap}
            >
              <Grid item xs={12}>
                <TextField
                  id="username"
                  label="Username"
                  name="username"
                  required
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
              <Grid item sx={styles.actionButtons} xs={12}>
                <RouteLink sx={styles.forogtPassword} to="/forgotPassword">
                  Forgot password?
                </RouteLink>
                <Button
                  onClick={handleSubmit(loginRequest)}
                  startIcon={<LoginIcon />}
                  sx={styles.loginBtn}
                  type="submit"
                >
                  Login
                </Button>
                <Button
                  onClick={() => naviagate('/signup')}
                  startIcon={<SignupIcon />}
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

Login.propTypes = {
  loginRequest: PropTypes.func.isRequired
};

export default Login;
