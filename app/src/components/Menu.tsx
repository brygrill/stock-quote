import * as React from 'react';
import { Flex, Box } from 'rebass';

import Nav from './Nav';
import Social from './Social';

const navItems = [
  { title: 'HOME', href: '/' },
  { title: 'PAGE', href: '/first-page' },
  { title: 'POST', href: '/blog/my-first-post' },
];

const Menu = () => {
  return (
    <Flex
      sx={{
        p: 3,
        fontWeight: 'bold',
        fontFamily: 'body',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ justifyContent: 'flex-start' }}>
        <Nav items={navItems} />
      </Box>
      <Box sx={{ justifyContent: 'flex-end' }}>
        <Social />
      </Box>
    </Flex>
  );
};

export default Menu;
