import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, List, Grid } from 'semantic-ui-react';

const Content = props => {
  return (
    <List.Content className="listFlex">
      <div className="listDataLabel">{props.label.toUpperCase()}</div>
      <div>{props.value}</div>
    </List.Content>
  );
};

Content.propTypes = {
  label: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default class TableComponent extends Component {
  render() {
    return (
      <Segment inverted padded className="dataStatsSeg">
        <Header
          as="h2"
          inverted
          textAlign="center"
          style={{ fontWeight: 300, color: '#535757' }}
        >
          STATS
        </Header>
        <Grid inverted>
          <Grid.Row>
            <Grid.Column width={8}>
              <List divided inverted verticalAlign="middle">
                <List.Item>
                  <Content label="52 Wk Low" value={120.34} />
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
