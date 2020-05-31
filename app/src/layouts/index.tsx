import React, { ReactElement } from 'react';
import {
  CssBaseline,
  Container,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: '5rem 2rem'
    },
  }),
);

const Layout = ({ children }: { children: ReactElement }) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Nav />
      <Container className={classes.container}>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
