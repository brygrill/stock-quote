import React from 'react';
import { Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Section from './Section';
import HighlightCard from './HighlightCard';

const cards = [{ symbol: 'SPY' }, { symbol: 'QQQ' }, { symbol: 'TLT' }];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

const Highlights = () => {
  const classes = useStyles();
  return (
    <Section>
      <Grid container className={classes.root} spacing={4} justify="center">
        {cards.map(({ symbol }) => (
          <Grid item xs={12} sm={4} key={symbol}>
            <HighlightCard title={symbol} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default Highlights;
