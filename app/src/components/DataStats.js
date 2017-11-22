import React, { Component } from 'react';
import { Segment, List, Grid } from 'semantic-ui-react';

export default class TableComponent extends Component {
  render() {
    return (
      <Segment inverted padded className="dataStatsSeg">
        <Grid inverted>
          <Grid.Row>
            <Grid.Column width={8}>
              <List divided inverted verticalAlign="middle">
                <List.Item>
                  <List.Content className="listFlex">
                    <div>Label</div>
                    <div>Value</div>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content className="listFlex">
                    <div>Label</div>
                    <div>Value</div>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content className="listFlex">
                    <div>Label</div>
                    <div>Value</div>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content className="listFlex">
                    <div>Label</div>
                    <div>Value</div>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content className="listFlex">
                    <div>Label</div>
                    <div>Value</div>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={8}>
              <List divided inverted verticalAlign="middle">
                <List.Item>
                  <List.Content className="listFlex">
                    <div>Label</div>
                    <div>Value</div>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content className="listFlex">
                    <div>Label</div>
                    <div>Value</div>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content className="listFlex">
                    <div>Label</div>
                    <div>Value</div>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content className="listFlex">
                    <div>Label</div>
                    <div>Value</div>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content className="listFlex">
                    <div>Label</div>
                    <div>Value</div>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
