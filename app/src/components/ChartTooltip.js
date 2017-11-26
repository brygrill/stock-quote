import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

class ChartTooltip extends Component {
  render() {
    const { data, label, active } = this.props;
    if (data[label] && active) {
      const item = data[label];
      return (
        <List size="mini">
          <List.Item>{item.label}</List.Item>
          <List.Item>Close: {item.close}</List.Item>
          <List.Item>Change: {item.changePercent}</List.Item>
          <List.Item>Volume: {item.volume}</List.Item>
        </List>
      );
    }
    return null;
  }
}

ChartTooltip.propTypes = {
  data: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default ChartTooltip;
