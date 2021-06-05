import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, FormProvider, useFieldArray } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import { TextField, CheckField, SelectField } from '__SHARED__/ReactHookForm';
import Button from '__SHARED__/Button';
import IconButton from '__SHARED__/IconButton';
import Dialog from '__SHARED__/Dialog';
import { DeleteIcon, AddIcon } from '__SHARED__/SVG';
import { ADD_CARD, EDIT_CARD } from '__GLOBAL__/constants';

const styles = makeStyles(() => ({
  endWrap: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const AddEditCard = props => {
  const {
    addCardRequest,
    isAdd,
    item,
    addPanelOpen,
    editPanelOpen,
    toggleDialog,
    editCardRequest,
    isAdmin
  } = props;
  const classes = styles(props);
  const { handleSubmit, reset, watch, control, ...methods } = useForm({
    mode: 'onTouched',
    defaultValues: {
      title: '',
      description: '',
      price: '',
      dimensions: '',
      filename: '',
      quantity: '',
      display: true,
      sizes: []
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'sizes'
  });

  useEffect(() => {
    if (!isAdd) reset(item);
  }, [isAdd, item, reset]);

  const onClose = () => {
    if (isAdd) toggleDialog(ADD_CARD, false);
    else toggleDialog(EDIT_CARD, false);
  };

  const submitCard = values => {
    if (isAdd) addCardRequest(values, isAdmin);
    else editCardRequest({ ...values, id: item._id }, isAdmin);
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
      <FormProvider control={control} {...methods}>
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
          <Grid item xs={8}>
            Sizes
          </Grid>
          <Grid item xs={4} className={classes.endWrap}>
            <Button
              onClick={() => {
                append({ size: '', dimensions: '', quantity: '', price: '' });
              }}
              startIcon={<AddIcon />}
            >
              Add Size
            </Button>
          </Grid>
          <Grid item xs={12}>
            {fields.map((field, index) => (
              <Grid container spacing={2} key={field.id}>
                <Grid item xs={4}>
                  <TextField
                    label="Size"
                    name={`sizes[${index}].size`}
                    id="size"
                    required
                    defaultValue={field.size}
                  />
                </Grid>
                <Grid item xs={8} className={classes.endWrap}>
                  <IconButton
                    onClick={() => remove(index)}
                    icon={<DeleteIcon />}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Dimensions"
                    name={`sizes[${index}].dimensions`}
                    id="dimensions"
                    required
                    defaultValue={field.dimensions}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Price"
                    InputProps={{
                      startAdornment: <Grid>Rs. </Grid>
                    }}
                    name={`sizes[${index}].price`}
                    id="price"
                    required
                    rules={{
                      validate: {
                        onlyDigit: value => /^\d/.test(value) || 'Only numbers'
                      }
                    }}
                    defaultValue={field.price}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Quntity"
                    name={`sizes[${index}].quantity`}
                    id="quantity"
                    required
                    rules={{
                      validate: {
                        onlyDigit: value => /^\d/.test(value) || 'Only numbers'
                      }
                    }}
                    defaultValue={field.quantity}
                  />
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Filename"
              name="filename"
              id="filename"
              required
            />
          </Grid>
          <Grid item xs={3}>
            <CheckField
              label="Display Card"
              name="display"
              id="display"
              required
            />
          </Grid>
          <Grid item xs={3}>
            <SelectField
              label="Default size"
              name="size"
              id="defaultSize"
              options={watch('sizes').map(obj => obj.size)}
              required
            />
          </Grid>
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
  isAdmin: PropTypes.bool.isRequired,
  toggleDialog: PropTypes.func.isRequired
};

AddEditCard.defaultProps = {
  item: null
};

export default AddEditCard;
