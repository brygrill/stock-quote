import React from 'react';
import { Grid, useMediaQuery } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Section from './Section';
import HighlightCard from './HighlightCard';

import { breakpoint } from '../config';
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
  const isDesktop = useMediaQuery(breakpoint);
  return (
    <Section>
      <Grid container className={classes.root} spacing={isDesktop ? 4 : 1} justify="center">
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
