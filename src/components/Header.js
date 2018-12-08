import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  console.log(props);
  return (
    <div>
      <div>search</div>
      <div>market data</div>
    </div>
  );
};

Header.propTypes = {
  last: PropTypes.array.isRequired,
  quotes: PropTypes.object.isRequired,
};

export default Header;
