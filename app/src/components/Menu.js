import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon, Image } from 'semantic-ui-react';

import Search from './Search';

import searchByAlgolia from '../images/search-by-algolia-white.png';

const propTypes = {
  symbol: PropTypes.string,
  toHome: PropTypes.func.isRequired,
};

const defaultProps = {
  symbol: null,
};

class MenuComponent extends Component {
  toHome = () => {
    // set symbol to null on click to home
    // so home icon and search are not visible
    this.props.toHome(null);
  };
  render() {
    const visible = this.props.symbol
      ? { visibility: 'inherit' }
      : { visibility: 'hidden' };
    return (
      <div>
        {/* TOP MENU */}
        <Menu secondary icon inverted style={visible}>
          <Menu.Item
            onClick={this.toHome}
            as="div"
          >
            <Link to="/">
              <Icon name="home" size="large" />
            </Link>
          </Menu.Item>
          <Menu.Item position="right">
            <Search {...this.props} size="small" />
          </Menu.Item>
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

export default withRouter(MenuComponent);
