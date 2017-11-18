import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Image } from 'semantic-ui-react';

import searchByAlgolia from '../images/search-by-algolia-white.png';

export default class MenuComponent extends Component {
  render() {
    return (
      <div>
        {/* TOP MENU */}
        <Menu secondary stackable icon inverted>
          <Menu.Menu position="left">
            <Menu.Item>
              <Link to="/">
                <Icon name="home" size="large" />
              </Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        {/* BOTTOM MENU */}
        <Menu secondary fixed="bottom">
          <Menu.Menu position="right">
            <Menu.Item link>
              <Image src={searchByAlgolia} size="small" href="https://www.algolia.com/" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
