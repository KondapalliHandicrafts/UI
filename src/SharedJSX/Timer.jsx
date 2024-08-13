import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import Text from './Text';

const Timer = props => {
  const { min = 0, sx = {}, color = 'primary.main', sec = 0, timerOut } = props;
  const [time, setTime] = useState({
    seconds: sec < 10 ? `0${sec}` : sec,
    minutes: min < 10 ? `0${min}` : min
  });

  useEffect(() => {
    let secondsRemaining = min * 60 - 1;
    const intervalHandle = setInterval(() => {
      const minValue = Math.floor(secondsRemaining / 60);
      const secValue = secondsRemaining - minValue * 60;
      setTime({
        minutes: minValue < 10 ? `0${minValue}` : minValue,
        seconds: secValue < 10 ? `0${secValue}` : secValue
      });

      if (minValue === 0 && secValue === 0) {
        clearInterval(intervalHandle);
        timerOut();
      }
      secondsRemaining -= 1;
    }, 1000);
    return () => {
      clearInterval(intervalHandle);
    };
  }, [min, timerOut]);

  return (
    <Grid sx={{ display: 'flex', alignItems: 'center' }}>
      <Text sx={[...(Array.isArray(sx) ? sx : [sx])]}>{time.minutes}</Text>
      <Text sx={{ color }}>:</Text>
      <Text sx={[...(Array.isArray(sx) ? sx : [sx])]}>{time.seconds}</Text>
    </Grid>
  );
};

Timer.propTypes = {
  color: PropTypes.string,
  min: PropTypes.number,
  sec: PropTypes.number,
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  ),
  timerOut: PropTypes.func.isRequired
};

export default Timer;
