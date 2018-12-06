import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import Search from './Search';

export default class SearchPage extends Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column width={16}>
          <Segment inverted className="searchSeg">
            <Search {...this.props} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    );
  }
}
