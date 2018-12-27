import React, { useContext } from 'react';
import _ from 'lodash';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { DataContext } from '../components/WithDataContext';
import QuoteItem from './QuoteData';
import { quoteFormatting } from '../utils/format';

const setDisplay = (current, quote, i) => {
  // if current quote in indicies, use that data
  // so display is in sync
  if (!_.isEmpty(current)) {
    if (current.quote.symbol === i) {
      return quoteFormatting(current.quote);
    } else {
      return quoteFormatting(quote);
    }
  }
  // if on homepage, dont worry about syncing quote
  return quoteFormatting(quote);
};

const Nav = props => {
  const context = useContext(DataContext);
  return (
    <Menu fluid style={{ marginBottom: 0 }}>
      <Menu.Item header>
        <Link to="/" style={{ color: 'black' }}>
          Home
        </Link>
      </Menu.Item>
      {/* {_.map(context.indiciesData.quotes, (q, i) => {
        // const display = setDisplay(context.quoteData, q.quote, i);
        return (
          <QuoteItem key={i} display={i}/>
        );
      })} */}
    </Menu>
  );
};

// export default withRouter(Nav);
export default Nav;
