import React from 'react';
import SearchInput from './SearchInput';
import HeadlineQuotes from './HeadlineQuotes'
import { withSocketContext } from '../components/WithSocketContext';

const Header = props => {
  console.log(props)
  return (
    <div>
      <SearchInput />
      <HeadlineQuotes quotes={props.indiciesData}/>
    </div>
  );
};

export default withSocketContext()(Header);
