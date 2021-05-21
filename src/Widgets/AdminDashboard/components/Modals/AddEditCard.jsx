import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, FormProvider } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import { TextField, CheckField } from '__SHARED__/ReactHookForm';
import Button from '__SHARED__/Button';
import Dialog from '__SHARED__/Dialog';
import { ADD_CARD, EDIT_CARD } from '__GLOBAL__/constants';

const styles = makeStyles(() => ({
  addWrap: {}
}));

const AddEditCard = props => {
  const {
    addCardRequest,
    isAdd,
    item,
    addPanelOpen,
    editPanelOpen,
    toggleDialog,
    editCardRequest
  } = props;
  const classes = styles(props);
  const { handleSubmit, reset, watch, setValue, ...methods } = useForm({
    mode: 'onTouched',
    defaultValues: {
      title: '',
      description: '',
      price: '',
      height: '',
      filename: '',
      quantity: '',
      display: true
    }
  });

  useEffect(() => {
    if (!isAdd) reset(item);
  }, [isAdd, item, reset]);

  const onClose = () => {
    if (isAdd) toggleDialog(ADD_CARD, false);
    else toggleDialog(EDIT_CARD, false);
  };

  const submitCard = values => {
    if (isAdd) addCardRequest(values);
    else editCardRequest({ ...values, id: item._id });
    onClose();
  };

  return (
    <Dialog
      closeButton
      onClose={onClose}
      open={isAdd ? addPanelOpen : editPanelOpen}
      title={isAdd ? 'Add Address' : 'Edit Address'}
      buttons={[
        <Button key={1} onClick={handleSubmit(submitCard)}>
          Submit
        </Button>,
        <Button key={2} onClick={onClose}>
          Cancel
        </Button>
      ]}
    >
      <FormProvider {...methods}>
        <Grid
          component="form"
          onSubmit={handleSubmit(submitCard)}
          className={classes.addWrap}
          container
          spacing={2}
        >
          <Grid item xs={12}>
            <TextField
              label="Title"
              name="title"
              id="title"
              required
              rules={{
                validate: {
                  length: value =>
                    value.length <= 20 || 'less than 20 charcters'
                }
              }}
            />
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
          <Grid item xs={4}>
            <TextField
              label="Height (inches)"
              name="height"
              id="height"
              required
              rules={{
                validate: {
                  onlyDigit: value => /^\d/.test(value) || 'Only numbers'
                }
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Price"
              InputProps={{
                startAdornment: <Grid>Rs. </Grid>
              }}
              name="price"
              id="price"
              required
              rules={{
                validate: {
                  onlyDigit: value => /^\d/.test(value) || 'Only numbers'
                }
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Quntity"
              name="quantity"
              id="quantity"
              required
              rules={{
                validate: {
                  onlyDigit: value => /^\d/.test(value) || 'Only numbers'
                }
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Filename"
              name="filename"
              id="filename"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <CheckField
              label="Display Card"
              name="display"
              id="display"
              required
            />
          </Grid>
          {/* <Grid item xs={12}>
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
          )} */}
        </Grid>
      </FormProvider>
    </Dialog>
  );
};

AddEditCard.propTypes = {
  addCardRequest: PropTypes.func.isRequired,
  addPanelOpen: PropTypes.bool.isRequired,
  editCardRequest: PropTypes.bool.isRequired,
  editPanelOpen: PropTypes.bool.isRequired,
  item: PropTypes.object,
  isAdd: PropTypes.bool.isRequired,
  toggleDialog: PropTypes.func.isRequired
};

AddEditCard.defaultProps = {
  item: null
};

export default AddEditCard;
