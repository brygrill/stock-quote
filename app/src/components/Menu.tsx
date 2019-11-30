import * as React from 'react';
import { Flex, Box } from 'rebass';

import Nav from './Nav';

const navItems = [
  { title: 'HOME', href: '/' },
  { title: 'QUERY', href: '/query' },
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
    </Flex>
  );
};

export default Menu;
