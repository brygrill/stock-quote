import React from 'react';
import PropTypes from 'prop-types';
import { Statistic} from 'semantic-ui-react';

const Stats = ({ last, change, percent }) => {
  return (
    <Statistic.Group>
      <Statistic>
        <Statistic.Value>{last}</Statistic.Value>
        <Statistic.Label>Last</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{change}</Statistic.Value>
        <Statistic.Label>Change</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{percent}</Statistic.Value>
        <Statistic.Label>Percent</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  );
};

Stats.propTypes = {
  last: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
};

export default Stats;
