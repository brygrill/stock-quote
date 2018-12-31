import React, { useContext } from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { DataContext } from '../components/WithDataContext';
import NewsItems from '../components/NewsItems';
import setTitle from '../utils/title';

const HomePage = props => {
  const context = useContext(DataContext);
  setTitle(null, null)
  return (
    <Segment style={{ minHeight: '300px' }}>
      {!context.fetchingIncidies.loading && (
        <React.Fragment>
          <Header style={{ fontWeight: 300, fontSize: '2rem' }}>
            Latest Headlines
          </Header>
          <NewsItems news={context.indiciesData.news} slice={10} />
        </React.Fragment>
      )}
    </Segment>
  );
};

export default HomePage;
