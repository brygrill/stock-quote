import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import { Grid, Item } from 'semantic-ui-react';

const NewsItems = ({ news }) => {
  console.log(news);
  return (
    <Grid.Row>
      <Grid.Column>
        <Item.Group relaxed link>
          {_.chain(news)
            .slice(0, 5)
            .map(n => {
              return (
                <Item href={n.url} key={n.datetime} target="_blank">
                  <Item.Content>
                    <Item.Header>{n.headline}</Item.Header>
                    <Item.Meta>{`Via ${n.source}`}</Item.Meta>
                    <Item.Description>{n.summary}</Item.Description>
                    <Item.Extra>{moment(n.datetime).format('dddd, MMMM Do YYYY, h:mm a')}</Item.Extra>
                  </Item.Content>
                </Item>
              );
            })
            .value()}
        </Item.Group>
      </Grid.Column>
    </Grid.Row>
  );
};

NewsItems.propTypes = {
  news: PropTypes.array.isRequired,
};

export default NewsItems;
