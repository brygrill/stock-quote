import React from 'react';
import Head from 'next/head';
import { CssBaseline, Container } from '@material-ui/core';

import Nav from './Nav';

const Wrapper = ({ title = 'Stock Quote', children }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      ></link>
    </Head>
    <CssBaseline />
    <Nav />
    <Container>{children}</Container>
  </>
);

export default Wrapper;
