import React from 'react';
import PropTypes from 'prop-types';
import { FormProvider, useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Loading from '__SHARED__/Loading';
import Paper from '__SHARED__/Paper';
import { TextField } from '__SHARED__/ReactHookForm';
import Button from '__SHARED__/Button';
import { SubmitIcon } from '__SHARED__/SVG';

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  message: {
    color: props =>
      props.curPasswordStatus === 200
        ? theme.colors.success
        : theme.colors.error
  },
  changePasswordWrap: {
    maxWidth: '700px'
  },
  submitBtn: {
    textAlign: 'right'
  }
}));

const ChangePassword = props => {
  const {
    dataLoaded,
    changePasswordRequest,
    checkCurPasswordRequest,
    curPasswordStatus,
    curPasswordmessage
  } = props;
  const { handleSubmit, watch, setValue, reset, ...methods } = useForm({
    mode: 'onTouched',
    defaultValues: {
      curPassword: '',
      password: '',
      confirmPassword: ''
    }
  });

  const classes = styles(props);
  return (
    <React.Fragment>
      <Loading open={dataLoaded} />
      <Grid container className={classes.container}>
        <Paper elevation={4}>
          <FormProvider {...methods}>
            <Grid
              className={classes.changePasswordWrap}
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
                    <Grid component="span" className={classes.message}>
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
              <Grid className={classes.submitBtn} item xs={12}>
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
ChangePassword.defaultProps = {};

export default ChangePassword;
