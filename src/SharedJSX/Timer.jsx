import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Timer = props => {
  const { min, sec, timerOut } = props;
  const [seconds, setSeconds] = useState(sec < 10 ? `0${sec}` : sec);
  const [minutes, setMinutes] = useState(min < 10 ? `0${min}` : min);

  useEffect(() => {
    let secondsRemaining = 0;
    const intervalHandle = setInterval(() => {
      const remainingMin = Math.floor(secondsRemaining / 60);
      const remainingSec = secondsRemaining - min * 60;
      setSeconds(remainingSec < 10 ? `0${remainingSec}` : remainingSec);
      setMinutes(remainingMin < 10 ? `0${remainingMin}` : remainingMin);
      if (min === 0 && sec === 0) {
        clearInterval(intervalHandle);
        timerOut();
      }
      secondsRemaining -= 1;
    }, 1000);
    secondsRemaining = minutes * 60 - 1;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [min, sec, timerOut]);

  return (
    <React.Fragment>
      {minutes}:{seconds}
    </React.Fragment>
  );
};

Timer.propTypes = {
  min: PropTypes.number,
  sec: PropTypes.number,
  timerOut: PropTypes.func.isRequired
};
Timer.defaultProps = {
  min: 0,
  sec: 0
};

export default Timer;
