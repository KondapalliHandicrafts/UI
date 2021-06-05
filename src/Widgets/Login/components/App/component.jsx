import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '__SHARED__/Paper';
import { useForm, FormProvider } from 'react-hook-form';
import Loading from '__SHARED__/Loading';
import Button from '__SHARED__/Button';
import RouteLink from '__SHARED__/RouteLink';
import { TextField } from '__SHARED__/ReactHookForm';
import { LoginIcon, SignupIcon } from '__SHARED__/SVG';
import { paths } from '__GLOBAL__/constants';

const styles = makeStyles(() => ({
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
  forgotPassword: {
    marginLeft: '2rem'
  },
  actionButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
}));

const Login = props => {
  const { dataLoaded, loginRequest, commonLoader, history } = props;
  const { handleSubmit, ...methods } = useForm({
    mode: 'onTouched',
    defaultValues: {
      username: '',
      password: ''
    }
  });
  const classes = styles(props);

  useEffect(() => {
    commonLoader(true);
  }, [commonLoader]);

  return (
    <React.Fragment>
      <Loading open={!dataLoaded} />
      <Grid className={classes.container}>
        <Paper elevation={4}>
          <FormProvider {...methods}>
            <Grid
              className={classes.loginWrap}
              component="form"
              onSubmit={handleSubmit(loginRequest)}
              container
              spacing={2}
            >
              <Grid item xs={12}>
                <TextField
                  label="Username"
                  name="username"
                  id="username"
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
              <Grid item className={classes.actionButtons} xs={12}>
                <RouteLink
                  className={classes.forgotPassword}
                  to={paths.forgotPassword}
                >
                  Forgot password?
                </RouteLink>
                <Button
                  startIcon={<LoginIcon />}
                  className={classes.loginBtn}
                  type="submit"
                  onClick={handleSubmit(loginRequest)}
                >
                  Login
                </Button>
                <Button
                  startIcon={<SignupIcon />}
                  onClick={() => history.push(paths.register)}
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
  commonLoader: PropTypes.func.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  loginRequest: PropTypes.func.isRequired
};
Login.defaultProps = {};

export default Login;
