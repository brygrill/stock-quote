import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

const items = [
  { name: 'd1', label: '1 Day' },
  { name: 'm1', label: '1 Month' },
  { name: 'm3', label: '3 Months' },
  { name: 'm6', label: '6 Months' },
  { name: 'ytd', label: 'YTD' },
  { name: 'y1', label: '1 Year' },
];

const ChartMenu = ({ active, onClick }) => {
  return (
    <Menu widths={items.length} attached>
      {items.map(i => (
        <Menu.Item
          key={i.name}
          name={i.name}
          active={i.name === active}
          onClick={(e, { name }) => onClick(name)}
        >
          {i.label}
        </Menu.Item>
      ))}
    </Menu>
  );
};

ChartMenu.propTypes = {
  active: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ChartMenu;
