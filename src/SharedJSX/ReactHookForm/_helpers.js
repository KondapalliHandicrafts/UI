export const maxSizeMB = value => value / (1024 * 1024);
export const maxLength = (value, max) =>
  value.length >= max || 'Should be of atleast 8 length';
export const containsUpperCh = value =>
  /[A-Z]/.test(value) || 'Should contain atleast 1 uppercase';
export const containsLowerCh = value =>
  /[a-z]/.test(value) || 'Should contain atleast 1 lowercase';
export const containsDigit = value =>
  /\d/.test(value) || 'Should contain atleast one digit';
export const containsSpCh = value =>
  /[^A-Za-z0-9]+/.test(value) || 'Should contain atleast one special character';
export const emailValidation = value =>
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  ) || 'Please enter a valid email';

export const typeValidation = type => {
  const validations = {};
  if (type === 'password') {
    validations.length = value => maxLength(value, 8);
    validations.containsUpperCh = containsUpperCh;
    validations.containsLowerCh = containsLowerCh;
    validations.containsDigit = containsDigit;
    validations.containsSpCh = containsSpCh;
  } else if (type === 'email') {
    validations.emailValidation = emailValidation;
  }
  return validations;
};
