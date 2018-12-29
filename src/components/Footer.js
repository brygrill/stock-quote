import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Disclaimer from './Disclaimer';

const FixedBottom = styled.footer`
  bottom: 0;
  left: 0;
  padding: 0.25rem 0;
`;

const Footer = () => {
  return (
    <FixedBottom>
      <Disclaimer session={false} />
    </FixedBottom>
  );
};

Footer.propTypes = {
  session: PropTypes.object,
};

Footer.defaultProps = {
  session: {
    connected: false,
  },
};

export default Footer;
