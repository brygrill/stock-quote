import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Nav = props => {
  return (
    <Menu fluid borderless text style={{ margin: '0 0 -1rem 0' }}>
      <Menu.Item header>
        <Link to="/" style={{ color: 'black' }}>
          Stock Quotes
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
