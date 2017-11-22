import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Media from 'react-media';
import { Menu, Popup, Icon } from 'semantic-ui-react';

import Search from './Search';

const propTypes = {
  symbol: PropTypes.string,
  toHome: PropTypes.func.isRequired,
};

const defaultProps = {
  symbol: null,
};

const Disclaimer = () => {
  return (
    <div className="disclaimer">
      <span>
        Data provided for free by{' '}
        <a href="https://iextrading.com/developer/">IEX</a> |{' '}
      </span>
      <span>
        <a href="https://iextrading.com/api-exhibit-a/">IEX Disclaimer</a> |{' '}
      </span>
      <span>
        Search by <a href="https://www.algolia.com/">Algolia</a>
      </span>
    </div>
  );
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
        <Menu secondary inverted fixed="bottom">
          <Menu.Menu position="right">
            <Menu.Item icon style={{ padding: '1rem' }}>
              {/* Show icon popup with disclaimer on mobile */}
              <Media query={{ maxWidth: 737 }}>
                {matches =>
                  matches ? (
                    <Popup
                      inverted
                      on="click"
                      trigger={
                        <Icon name="info circle" size="large" color="grey" />
                      }
                    >
                      <Popup.Content>
                        <Disclaimer />
                      </Popup.Content>
                    </Popup>
                  ) : (
                    <Disclaimer />
                  )
                }
              </Media>
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
