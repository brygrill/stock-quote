import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

import Search from './Search';
import Disclaimer from './Disclaimer';

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
    // dont show top menu on home screen
    const topVisible = this.props.symbol
      ? {}
      : { display: 'none' };
    // dont show this version of disclaimer on quote screen
    const bottomVisible = this.props.symbol
      ? { display: 'none' }
      : {};
    return (
      <div>
        {/* TOP MENU */}
        <Menu secondary icon inverted style={topVisible}>
          <Menu.Item onClick={this.toHome} as="div">
            <Link to="/">
              <Icon name="home" size="large" />
            </Link>
          </Menu.Item>
          <Menu.Item position="right">
            <Search {...this.props} size="small" compact />
          </Menu.Item>
        </Menu>

        {/* BOTTOM MENU */}
        <Menu secondary inverted fixed="bottom" style={bottomVisible}>
          <Menu.Menu>
            <Menu.Item icon style={{ padding: '1rem' }}>
              <Disclaimer />
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
