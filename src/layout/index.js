import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Nav />
      <Container className="page-wrap">
        <Header />
        <div>{children}</div>
        <Footer />
      </Container>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
