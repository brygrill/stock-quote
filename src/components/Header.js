import React from 'react';
import { Segment } from 'semantic-ui-react';
import Media from 'react-media';
import SearchInput from './SearchInput';
import HeadlineQuotes from './HeadlineQuotes';
import { withSocketContext } from '../components/WithSocketContext';

const Header = props => {
  console.log(props);
  return (
    <div>
      <Media query="(max-width: 599px)">
        {matches => (
          <React.Fragment>
            <Segment basic textAlign="center" style={{ margin: '0 0 -1rem 0' }}>
              <SearchInput />
            </Segment>
            <Segment basic>
              <HeadlineQuotes quotes={props.indiciesData} media={matches}/>
            </Segment>
          </React.Fragment>
        )}
      </Media>
    </div>
  );
};

export default withSocketContext()(Header);
