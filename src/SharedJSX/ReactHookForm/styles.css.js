import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  fileUploadContainer: {
    border: '1px solid',
    padding: '2rem 1rem',
    cursor: 'pointer',
    color: props =>
      props.errors && props.errors[props.name]
        ? theme.colors.error
        : theme.colors.black,
    borderColor: props =>
      props.errors && props.errors[props.name]
        ? theme.colors.error
        : theme.colors.black2,
    borderRadius: '5px',
    width: '100%',
    textAlign: 'center'
  }
}));
