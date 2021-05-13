import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Normal from './Fonts/Normal';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '12px 16px'
  },
  transparentConnector: {
    backgroundColor: theme.colors.transparent
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
}));

const TimeLineKH = props => {
  const { className, align, data } = props;
  const classes = useStyles();

  return (
    <Timeline className={classNames(className)} align={align}>
      {data.map((item, index) => {
        return (
          <TimelineItem key={item.id}>
            <TimelineOppositeContent className={classes.verticallyCenter}>
              {item.period}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector
                className={classNames({
                  [classes.transparentConnector]: index === 0
                })}
              />
              <TimelineDot variant="outlined" color="primary">
                {item.icon}
              </TimelineDot>
              <TimelineConnector
                className={classNames({
                  [classes.transparentConnector]: data.length - 1 === index
                })}
              />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  className={classes.period}
                  variant="h4"
                  componeent="h4"
                >
                  {item.title}
                </Typography>
                <Normal className={classes.normalText}>{item.context}</Normal>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};

TimeLineKH.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  align: PropTypes.oneOf(['alternate', 'left', 'right'])
};

TimeLineKH.defaultProps = {
  className: null,
  align: 'alternate'
};

export default TimeLineKH;
