import React from 'react';
import {
  AppBar,
  Typography,
  makeStyles,
  createStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      top: 'auto',
      bottom: 0,
    },
  }),
);
const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="secondary" className={classes.appBar}>
      <Typography>Footer</Typography>
    </AppBar>
  );
};

export default Footer;
