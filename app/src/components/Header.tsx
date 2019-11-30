import * as React from 'react';
import { Box, Heading } from 'rebass';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridGap: 4,
        gridTemplateColumns: '1fr 1fr',
        '@media screen and (max-width: 40em)': {
          gridTemplateColumns: 'none',
        },
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          p: 3,
          '@media screen and (max-width: 40em)': {
            order: 1,
          },
        }}
      >
        <Heading
          sx={{
            fontSize: [4, 5, 6],
            py: 1,
          }}
        >
          Gatsby Starter TypeScript Rebass
        </Heading>
      </Box>
    </Box>
  );
};

export default Header;
