import React, { useContext } from 'react';
import { Segment } from 'semantic-ui-react';
import Media from 'react-media';
import { withRouter } from 'react-router';

import SearchInput from './SearchInput';
import HeadlineQuotes from './HeadlineQuotes';
import { DataContext } from '../components/WithDataContext';

const Header = props => {
  const context = useContext(DataContext);
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
            <Segment
              basic
              textAlign="center"
              style={!matches ? { margin: '0 0 -2rem 0' } : null}
            >
              <SearchInput />
            </Segment>
            {!matches && (
              <Segment basic>
                <HeadlineQuotes
                  currentQuote={context.quoteData}
                  incidies={context.indiciesData.quotes}
                  push={push}
                  media={matches}
                />
              </Segment>
            )}
          </React.Fragment>
        )}
      </Media>
    </div>
  );
};

export default withRouter(Header);
