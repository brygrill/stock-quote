import React from 'react';
import PropTypes from 'prop-types';
import {Segment, Header} from 'semantic-ui-react'

const QuoteData = props => {
  console.log(props.data)
  return (
    <Segment loading={props.loading}>
      <Header>
        {props.symbol}
      </Header>
    </Segment>
  );
};

QuoteData.propTypes = {
  loading: PropTypes.bool.isRequired,
  symbol: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

export default QuoteData;