import React, { ReactElement } from 'react';
import {
  CssBaseline,
  ThemeProvider,
  Container,
  makeStyles,
  createStyles,
} from '@material-ui/core';

import theme from './theme';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: '5rem 2rem',
    },
  }),
);

const Layout = ({ children }: { children: ReactElement }) => {
  const classes = useStyles();
  return (
    <>
      
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Nav />
        <Container className={classes.container}>
          <main>{children}</main>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
