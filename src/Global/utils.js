import { format, isValid } from 'date-fns';
import defaultTheme from './theme';
import {
  DATE_FORMAT,
  DATE_TIME_FORMAT,
  TIME_FORMAT
} from '../SharedJSX/ReactHookForm/helpers';

export const getTheme = theme => {
  if (theme === 'Default') return defaultTheme(false);
  if (theme === 'Dark') return defaultTheme(true);
  return defaultTheme(theme);
};

export const formatDate = (date, DATE_TYPE = 'dd-MM-yyyy') => {
  if (isValid(new Date(`${date}T00:00:00`))) return format(date, DATE_TYPE);
  return '';
};

export const isObjectEmpty = obj => {
  if (obj === undefined || obj === null) return true;
  return (
    obj &&
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
};

// export const formatDate = (date, formatType = DATE_TIME_FORMAT) => {
//   if (isValid(date)) return format(date, formatType);
//   return '';
// };

export const parseDateTime = (datetime, formatType = DATE_TIME_FORMAT) => {
  if (datetime) return format(new Date(datetime), formatType);
  return '';
};

export const parseDate = (date, formatType = DATE_FORMAT) => {
  if (!date) return '';
  if (typeof date === 'string') return format(new Date(date), formatType);
  return format(date, formatType);
};

export const parseTime = (date, formatType = TIME_FORMAT) => {
  if (!date) return '';
  if (typeof date === 'string') return format(new Date(date), formatType);
  return format(date, formatType);
};

export const parseDateTimestamp = (
  timestamp,
  formatType = DATE_TIME_FORMAT
) => {
  if (timestamp) return format(new Date(Number(timestamp)), formatType);
  return format(timestamp, formatType);
};

export const convertTz = (date, tzString = 'UTC') => {
  const returnDate = typeof date === 'string' ? new Date(date) : date;
  return returnDate.toLocaleString('en-US', {
    timeZone: tzString
  });
};

export const getDeepProperty = (obj, path, def) => {
  const segments = path.split('.');
  let current = obj;
  while (typeof current === 'object' && current !== null && segments.length) {
    current = current[segments.shift()];
  }
  if (!segments.length) {
    if ((current === undefined || current === null) && def !== undefined)
      return def;
    return current;
  }
  if (def !== undefined) return def;
  return '';
};
