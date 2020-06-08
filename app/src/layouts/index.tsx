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
import SearchHeader from '../components/SearchHeader';

const LazyFooter = React.lazy(() => import('../components/Footer'));

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: '4rem 1rem',
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
        <Container className={classes.container} maxWidth="sm">
          <main>
            <SearchHeader />
            {children}
          </main>
        </Container>
        <LazyFooter />
      </ThemeProvider>
    </>
  );
};

export default Layout;
