// @flow
export const maxSizeMB = (value: number): number => value / (1024 * 1024);
export const maxLength = (value: string, max: number): boolean | string =>
  value.length >= max || 'Should be of atleast 8 length';
export const containsUpperCh = (value: string): boolean | string =>
  /[A-Z]/.test(value) || 'Should contain atleast 1 uppercase';
export const containsLowerCh = (value: string): boolean | string =>
  /[a-z]/.test(value) || 'Should contain atleast 1 lowercase';
export const containsDigit = (value: string): boolean | string =>
  /\d/.test(value) || 'Should contain atleast one digit';
export const containsSpCh = (value: string): boolean | string =>
  /[^A-Za-z0-9]+/.test(value) || 'Should contain atleast one special character';
export const emailValidation = (value: string): boolean | string =>
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  ) || 'Please enter a valid email';

export const typeValidation = (type: string): { ... } => {
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
