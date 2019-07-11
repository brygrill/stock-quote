import React, { useContext } from 'react';
import _ from 'lodash';
import { Segment, Header, Grid } from 'semantic-ui-react';
import { DataContext } from '../components/WithDataContext';
import ListItems from '../components/ListItems';
import NewsItems from '../components/NewsItems';
import setTitle from '../utils/title';

const lists = ['infocus', 'mostactive', 'gainers', 'losers'];

const HomePage = () => {
  const { fetchingIncidies, indiciesData } = useContext(DataContext);
  setTitle(null, null);
  return (
    <Segment style={{ minHeight: '300px' }}>
      {!fetchingIncidies.loading && (
        <React.Fragment>
          <Grid>
            <Grid.Row columns="equal" centered>
              {_.map(lists, l => {
                return _.isEmpty(indiciesData[l]) ? null : (
                  <Grid.Column key={l}>
                    <ListItems items={indiciesData[l]} />
                  </Grid.Column>
                );
              })}
            </Grid.Row>
          </Grid>
          <Header style={{ fontWeight: 300, fontSize: '2rem' }}>
            Latest Headlines
          </Header>
          <NewsItems news={indiciesData.news} slice={10} />
        </React.Fragment>
      )}
    </Segment>
  );
};

export default HomePage;
