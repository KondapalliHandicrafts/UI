import React from 'react';
import PropTypes from 'prop-types';
import {
  Timeline as MuiTimeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@mui/lab';
import { Paper, Typography } from '@mui/material';
import Normal from './Text';

const styles = {
  paper: {
    padding: '12px 16px'
  },
  transparentConnector: {
    backgroundColor: 'colors.transparent'
  },
  normalText: {
    textAlign: 'justify'
  },
  verticallyCenter: {
    margin: 'auto 0'
  },
  period: {
    fontSize: '1.75rem',
    fontWeight: 500,
    marginTop: '.5rem',
    marginBottom: '.5rem'
  },
  icon: {
    margin: 0
  }
};

const TimeLine = props => {
  const { sx = {}, position = 'alternate', data } = props;

  return (
    <MuiTimeline position={position} sx={[...(Array.isArray(sx) ? sx : [sx])]}>
      {data.map((item, index) => {
        return (
          <TimelineItem key={item.id}>
            <TimelineOppositeContent sx={styles.verticallyCenter}>
              {item.period}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector
                sx={[index === 0 && styles.transparentConnector]}
              />
              <TimelineDot color="primary" variant="outlined">
                {item.icon}
              </TimelineDot>
              <TimelineConnector
                sx={[data.length - 1 === index && styles.transparentConnector]}
              />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={styles.paper}>
                <Typography component="div" sx={styles.period} variant="h6">
                  {item.title}
                </Typography>
                <Normal sx={styles.normalText}>{item.context}</Normal>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </MuiTimeline>
  );
};

TimeLine.propTypes = {
  data: PropTypes.array.isRequired,
  position: PropTypes.oneOf(['alternate', 'left', 'right']),
  sx: PropTypes.oneOfType(
    PropTypes.func,
    PropTypes.object,
    PropTypes.arrayOf([PropTypes.object, PropTypes.func, PropTypes.bool])
  )
};

export default TimeLine;
