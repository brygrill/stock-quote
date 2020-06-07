import React from 'react';
import {
  AppBar,
  Typography,
  Toolbar,
  Link,
  Button,
  IconButton,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';

import { Link as RRLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    link: {},
  }),
);

const Nav = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton aria-label="delete" disabled>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link
              component={RRLink}
              to="/"
              color="textPrimary"
              underline="none"
            >
              Stock Quotes
            </Link>
          </Typography>
          <Button color="inherit" disabled>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
