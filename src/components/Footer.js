import React from 'react';
import styled from 'styled-components';

const FixedBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.25rem 0.5rem;
`

const Footer = () => {
  return (
    <FixedBottom>
      footer
    </FixedBottom>
  );
};

export default Footer;