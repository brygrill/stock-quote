import React from 'react';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';

const Wrapper = ({ title = 'Stock Quote', children }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
    </Head>
    <CssBaseline />
    <div>nav</div>
    <main>{children}</main>
  </>
);

export default Wrapper;
