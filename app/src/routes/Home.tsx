import React from 'react';
import { Paper } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Section from '../components/Section';

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      padding: '3rem',
    },
  }),
);

const Home = () => {
  const classes = useStyles();

  return (
    <Section>
      <Paper className={classes.paper}>
        <div>Maybe news and other stuff goes here</div>
      </Paper>
    </Section>
  );
};

export default Home;
