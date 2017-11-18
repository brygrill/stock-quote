import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Icon, Image } from 'semantic-ui-react';

import searchByAlgolia from '../images/search-by-algolia-white.png';

const propTypes = {
  symbol: PropTypes.string,
  toHome: PropTypes.func.isRequired,
};

const defaultProps = {
  symbol: null,
};

export default class MenuComponent extends Component {
  toHome = () => {
    // set symbol to null on click to home
    // so home icon is not visible
    this.props.toHome(null);
  }
  render() {
    return (
      <div>
        {/* TOP MENU */}
        <Menu secondary stackable icon inverted>
          <Menu.Menu position="left">
            <Menu.Item
              style={
                this.props.symbol ? { visibility: 'inherit' } : { visibility: 'hidden' }
              }
              onClick={this.toHome}
            >
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
              <Image
                src={searchByAlgolia}
                size="small"
                href="https://www.algolia.com/"
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

MenuComponent.propTypes = propTypes;
MenuComponent.defaultProps = defaultProps;
