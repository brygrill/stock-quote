import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Menu } from 'semantic-ui-react';

const QuoteItem = props => {
  return (
    <Menu.Item>Hi</Menu.Item>
    // <Menu.Item>
    //   <Link to={_.lowerCase(props.display.symbol)}>{props.display.symbol}</Link>
    // </Menu.Item>
  );
};

QuoteItem.propTypes = {
  display: PropTypes.object.isRequired,
};

export default QuoteItem;
