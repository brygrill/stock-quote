import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import Header from '../components/Header';

const Layout = ({children}) => {
  return (
    <Container>
      <Header />
      <div>{children}</div>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout
