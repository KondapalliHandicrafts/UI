export const maxLength = (value, max = 8) =>
  value.length > max || `Should be of atleast ${max} length`;
export const containUpperCh = value =>
  /[A-Z]/.test(value) || 'Should contain atleast 1 uppercase';
export const containLowerCh = value =>
  /[a-z]/.test(value) || 'Should contain atleast 1 lowercase';
export const containNumber = value =>
  /\d/.test(value) || 'Should contain atleast 1 number';
export const containSpecialCh = value =>
  /[^A-Za-z0-9]/.test(value) || 'Should contain atleast 1 special character';
export const emailValidation = value =>
  /^[\w.]+@[a-z]+\.[a-z]{2,3}$/.test(value) || 'Please enter a valid email';
export const maxSizeMB = value => value / (1024 * 1024);

export const typeValidation = type => {
  const validations = {};
  if (type === 'password') {
    validations.length = value => maxLength(value, 8);
    validations.containLowerCh = containLowerCh;
    validations.containSpecialCh = containSpecialCh;
    validations.containUpperCh = containUpperCh;
    validations.containNumber = containNumber;
  } else if (type === 'email') {
    validations.emailValidation = emailValidation;
  }
  return validations;
};

export const DATE_FORMAT = 'dd-MM-yyyy';
export const DATE_TIME_FORMAT = 'dd-MM-yyyy HH:mm';
export const TIME_FORMAT = 'HH:mm:ss';

export const parseTime = time => {
  const date = new Date();
  date.setHours(time.substring(0, 2));
  date.setMinutes(time.substring(3, 5));
  date.setSeconds(time.substring(6, 8));
  return date;
};
