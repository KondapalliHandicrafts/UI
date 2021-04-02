import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, FormProvider } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import Loading from '__SHARED__/Loading';
import { TextField, FileUploadField } from '__SHARED__/ReactHookForm';
import Button from '__SHARED__/Button';
import IconButton from '__SHARED__/IconButton';
import { CloseIcon, SubmitIcon } from '__SHARED__/SVG';

const styles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10rem',
    flex: 1
  }
}));

const AddCard = props => {
  const { dataLoaded, addCardRequest, addCardLoader } = props;
  const { handleSubmit, reset, watch, setValue, ...methods } = useForm({
    mode: 'onTouched',
    defaultValues: {
      title: '',
      description: '',
      price: '',
      height: '',
      file: null
    }
  });
  const classes = styles(props);
  useEffect(() => {
    addCardLoader(true);
  }, []);

  const submitData = data => {
    addCardRequest(data);
    reset();
  };
  return (
    <React.Fragment>
      <Loading open={!dataLoaded} />
      <Grid container className={classes.container}>
        <FormProvider {...methods}>
          <Grid className={classes.addWrap} container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Title" name="title" id="title" required />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                name="description"
                id="description"
                multiline
                rows={6}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Height (inches)"
                name="height"
                id="height"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Price" name="price" id="price" required />
            </Grid>
            <Grid item xs={12}>
              <FileUploadField
                name="file"
                id="file"
                required
                accept="image/webp"
              />
            </Grid>
            {watch('file') && (
              <React.Fragment>
                <Grid item xs={10}>
                  {watch('file').name}
                </Grid>
                <Grid item xs={2}>
                  <IconButton
                    icon={<CloseIcon />}
                    onClick={() => {
                      setValue('file', null, { shouldValidate: true });
                    }}
                  />
                </Grid>
              </React.Fragment>
            )}
            <Grid item xs={12}>
              <Button
                startIcon={<SubmitIcon />}
                type="submit"
                onClick={handleSubmit(submitData)}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </FormProvider>
      </Grid>
    </React.Fragment>
  );
};

AddCard.propTypes = {
  addCardLoader: PropTypes.func.isRequired,
  addCardRequest: PropTypes.func.isRequired,
  dataLoaded: PropTypes.bool.isRequired
};
AddCard.defaultProps = {};

export default AddCard;
