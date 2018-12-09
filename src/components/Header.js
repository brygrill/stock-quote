import React from 'react';
import { Segment } from 'semantic-ui-react';
import SearchInput from './SearchInput';
import HeadlineQuotes from './HeadlineQuotes';
import { withSocketContext } from '../components/WithSocketContext';

const Header = props => {
  console.log(props);
  return (
    <div>
      <Segment basic textAlign="center" style={{ margin: '0 0 -1rem 0' }}>
        <SearchInput />
      </Segment>
      <Segment>
        <HeadlineQuotes quotes={props.indiciesData} />
      </Segment>
    </div>
  );
};

export default withSocketContext()(Header);
