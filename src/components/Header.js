import React from 'react';
import { Segment } from 'semantic-ui-react';
import Media from 'react-media';
import { withRouter } from 'react-router';
import SearchInput from './SearchInput';
import HeadlineQuotes from './HeadlineQuotes';
import { withSocketContext } from '../components/WithSocketContext';

const Header = props => {
  const push = symbol => {
    props.history.push({
      pathname: `${symbol.toLowerCase()}`,
    });
  };
  return (
    <div>
      <Media query="(max-width: 768px)">
        {matches => (
          <React.Fragment>
            <Segment basic textAlign="center" style={{ margin: '0 0 -1rem 0' }}>
              <SearchInput />
            </Segment>
            <Segment basic>
              <HeadlineQuotes
                quotes={props.indiciesData}
                socket={props.indiciesLast}
                push={push}
                media={matches}
              />
            </Segment>
          </React.Fragment>
        )}
      </Media>
    </div>
  );
};

export default withSocketContext()(withRouter(Header));
