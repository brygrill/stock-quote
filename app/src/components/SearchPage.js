import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import Search from './Search';

export default class SearchPage extends Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column width={16}>
          <Search {...this.props} />
        </Grid.Column>
      </Grid.Row>
    );
  }
}
