import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({children}) => {
  return (
    <Container>
      <Header />
      <div>{children}</div>
      <Footer />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout
