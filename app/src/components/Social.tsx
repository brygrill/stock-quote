import * as React from 'react';
import { Flex, Box, Link } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { social } from '../config';

const Social = () => {
  return (
    <Flex sx={{ justifyContent: 'flex-end' }}>
      {social.map(i => {
        return (
          <Box sx={{ mr: [1, 2] }} key={i.title}>
            <Link href={i.href} variant="nav">
              <FontAwesomeIcon icon={i.src} size="2x" />
            </Link>
          </Box>
        );
      })}
    </Flex>
  );
};

export default Social;
