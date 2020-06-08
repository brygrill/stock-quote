import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  useMediaQuery,
} from '@material-ui/core';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import { breakpoint } from '../config';

const useStyles = makeStyles(() =>
  createStyles({
    stats: {
      display: 'flex',

    },
    statsDesktop: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0 0.5em'
    },
  }),
);

const HighlightCardWrapper = ({ title }: { title: string }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(breakpoint);
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={isDesktop ? classes.statsDesktop : classes.stats}
        >
          <span>$100.69</span>
          <span>+ $2.21</span>
          <span>+ 0.78%</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary">
          More
        </Button>
      </CardActions>
    </Card>
  );
};

export default React.memo(HighlightCardWrapper);
