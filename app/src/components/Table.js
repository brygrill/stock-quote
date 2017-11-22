import React, { Component } from 'react';
import { Segment, Table } from 'semantic-ui-react';

export default class TableComponent extends Component {
  render() {
    return (
      <Segment inverted className="tableSeg">
        <Table basic="very" celled inverted>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>52 Week High</Table.HeaderCell>
              <Table.HeaderCell>52 Week Low</Table.HeaderCell>
              <Table.HeaderCell>52 Week Change</Table.HeaderCell>
              <Table.HeaderCell>PE Ratio</Table.HeaderCell>
              <Table.HeaderCell>Dividend Yield</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>22</Table.Cell>
              <Table.Cell>22</Table.Cell>
              <Table.Cell>22</Table.Cell>
              <Table.Cell>22</Table.Cell>
              <Table.Cell>22</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}
