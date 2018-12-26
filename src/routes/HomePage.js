import React, { useContext } from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { DataContext } from '../components/WithDataContext';
import NewsItems from '../components/NewsItems';

const HomePage = props => {
  const context = useContext(DataContext);
  return (
    <Segment>
      <Header style={{ fontWeight: 300, fontSize: '2rem' }}>
        Latest Headlines
      </Header>
      <NewsItems news={context.indiciesData.news} slice={10} />
    </Segment>
  );
};

export default HomePage;
