import React from 'react';
import { AppBar, Typography, Link } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      top: 'auto',
      bottom: 0,
      display: 'flex'
    },
    title: {
      display: 'flex',
      justifyContent: 'center'
    },
    link: {
      justifyContent: 'center'
    },
  }),
);
const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="transparent" className={classes.appBar}>
      <Typography variant="subtitle1" className={classes.title}>
        <Link
          href="https://iexcloud.io"
          target="_blank"
          rel="noopener"
          color="textPrimary"
          underline="none"
          className={classes.link}
        >
          Data provided by IEX Cloud
        </Link>
      </Typography>
    </AppBar>
  );
};

export default Footer;
