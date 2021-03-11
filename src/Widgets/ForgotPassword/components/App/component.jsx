import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '__SHARED__/Paper';
import { useForm, FormProvider } from 'react-hook-form';
import Loading from '__SHARED__/Loading';
import Button from '__SHARED__/Button';
import { TextField } from '__SHARED__/ReactHookForm';
import { SubmitIcon } from '__SHARED__/SVG';

const styles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  submitBtn: {
    textAlign: 'right'
  },
  forgotWrap: {
    minWidth: 500,
    maxWidth: 700
  }
}));

const ForgotPassword = props => {
  const { dataLoaded, forgotPassword, message } = props;
  const classes = styles(props);
  const { handleSubmit, ...methods } = useForm({
    mode: 'onTouched',
    defaultValues: {
      username: ''
    }
  });
  return (
    <React.Fragment>
      <Loading open={!dataLoaded} />
      <Grid className={classes.container}>
        {message || (
          <Paper elevation={4}>
            <FormProvider {...methods}>
              <Grid className={classes.forgotWrap} container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Username"
                    name="username"
                    id="username"
                    type="username"
                    required
                  />
                </Grid>
                <Grid className={classes.submitBtn} item xs={12}>
                  <Button
                    startIcon={<SubmitIcon />}
                    type="submit"
                    onClick={handleSubmit(forgotPassword)}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </FormProvider>
          </Paper>
        )}
      </Grid>
    </React.Fragment>
  );
};

ForgotPassword.propTypes = {
  dataLoaded: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  forgotPassword: PropTypes.func.isRequired
};
ForgotPassword.defaultProps = {};

export default ForgotPassword;
