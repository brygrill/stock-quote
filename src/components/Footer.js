import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SocketContext } from '../components/WithSocketContext';
import Disclaimer from './Disclaimer';

const FixedBottom = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0.25rem 0.5rem;
`;

const Footer = () => {
  const { session } = useContext(SocketContext);
  return (
    <FixedBottom>
      <Disclaimer session={session.connected} />
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
