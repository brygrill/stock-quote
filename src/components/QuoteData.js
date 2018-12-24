import React from 'react';
import PropTypes from 'prop-types';
import { Header, Image } from 'semantic-ui-react';
import NotFound from './NotFound';
import { quoteFormatting } from '../utils/format';
import setTitle from '../utils/title';

const QuoteData = props => {

  if (props.data) {
    // format quote data
    const { quote, logo } = props.data;
    const display = quoteFormatting(quote);
    setTitle(display.symbol, display.latestPrice);
    console.log(props.data);

    return (
      <div>
        <Image src={logo.url} size="tiny" centered />
        <Header size="huge" textAlign="center">
          {display.symbol}
          <Header.Subheader>{display.companyName}</Header.Subheader>
        </Header>
      </div>
    );
  }

  return <NotFound />;
};

QuoteData.propTypes = {
  symbol: PropTypes.string,
  data: PropTypes.object,
};

QuoteData.defaultProps = {
  symbol: null,
  data: {},
};

export default QuoteData;
