import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

const Layout = ({ children }) => {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
