import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withSocketContext } from '../components/WithSocketContext';
import Disclaimer from './Disclaimer';

const FixedBottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0.25rem 0.5rem;
`;

const Footer = ({ session }) => {
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

export default withSocketContext()(Footer);
