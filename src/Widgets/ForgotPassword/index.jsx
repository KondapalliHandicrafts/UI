import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '../../SharedJSX/ReactHookForm';
import { SubmitIcon } from '../../SharedJSX/SVG';
import { Button, Loading, Paper } from '../../SharedJSX';
import { forgotPassword } from './forgotPasswordSlice';

const styles = {
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
};

const ForgotPassword = props => {
  const { message } = props;
  const dispatch = useDispatch();

  const dataLoading = useSelector(state => state.routing.dataLoading);

  const { handleSubmit, ...methods } = useForm({
    mode: 'onTouched',
    defaultValues: {
      username: ''
    }
  });
  const submitValues = values => dispatch(forgotPassword(values));

  return (
    <React.Fragment>
      <Loading open={!dataLoading} />
      <Grid sx={styles.container}>
        {message || (
          <Paper elevation={4}>
            <FormProvider {...methods}>
              <Grid
                container
                spacing={2}
                sx={styles.forgotWrap}
                component="form"
                onSubmit={handleSubmit(submitValues)}
              >
                <Grid item xs={12}>
                  <TextField
                    id="username"
                    label="Username"
                    name="username"
                    required
                    type="username"
                  />
                </Grid>
                <Grid item sx={styles.submitBtn} xs={12}>
                  <Button
                    onClick={handleSubmit(submitValues)}
                    startIcon={<SubmitIcon />}
                    type="submit"
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
  message: PropTypes.string.isRequired
};

export default ForgotPassword;
