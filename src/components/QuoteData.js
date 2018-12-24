import React from 'react';
import PropTypes from 'prop-types';
import {Segment, Header} from 'semantic-ui-react'
import setTitle from '../utils/title';

const QuoteData = props => {
  if (!props.loading) {
    console.log(props.data.quote.latestPrice)
    setTitle(props.symbol, props.data.quote.latestPrice)
  }

  return (
    <Segment loading={props.loading}>
      <Header>
        {props.symbol}
      </Header>
    </Segment>
  );
};

QuoteData.propTypes = {
  loading: PropTypes.bool,
  symbol: PropTypes.string,
  data: PropTypes.object
};

QuoteData.defaultProps = {
  loading: true,
  symbol: null,
  data: {}
}

export default QuoteData;