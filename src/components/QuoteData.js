import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Image } from 'semantic-ui-react';
import { quoteFormatting } from '../utils/format';
import setTitle from '../utils/title';

const QuoteData = props => {
  if (props.loading) {
    return null;
  }

  // format quote data
  const { quote, logo } = props.data;
  const display = quoteFormatting(quote);
  setTitle(display.symbol, display.latestPrice);
  console.log(props.data);

  return (
    <Segment loading={props.loading}>
      <Image src={logo.url} size="tiny" centered />
      <Header size="huge" textAlign="center">
        {display.symbol}
        <Header.Subheader>{display.companyName}</Header.Subheader>
      </Header>
    </Segment>
  );
};

QuoteData.propTypes = {
  loading: PropTypes.bool,
  symbol: PropTypes.string,
  data: PropTypes.object,
};

QuoteData.defaultProps = {
  loading: true,
  symbol: null,
  data: {},
};

export default QuoteData;
