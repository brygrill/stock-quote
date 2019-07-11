import React from 'react';
import { List } from 'semantic-ui-react';

const ListItems = ({ items }) => {
  console.log(items);
  return (
    <List>
      <List.Item>Apples</List.Item>
      <List.Item>Pears</List.Item>
      <List.Item>Oranges</List.Item>
    </List>
  );
};

export default ListItems;
