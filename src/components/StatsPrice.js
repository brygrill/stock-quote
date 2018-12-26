import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Statistic } from 'semantic-ui-react';

const StatWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const ChangeWrap = styled.div`
  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

const Dollar = styled.span`
  font-size: 2rem;
`

const StatsPrice = ({ last, change, percent, color }) => {
  return (
    <StatWrap>
      <Statistic style={{ marginBottom: 0 }}>
        <Statistic.Value><Dollar>$</Dollar>{last}</Statistic.Value>
      </Statistic>
      <ChangeWrap>
        <Statistic size="mini" color={color} style={{ marginBottom: 0 }}>
          <Statistic.Value>{change}</Statistic.Value>
        </Statistic>
        <Statistic size="mini" color={color} style={{ marginBottom: 0 }}>
          <Statistic.Value>{percent}</Statistic.Value>
        </Statistic>
      </ChangeWrap>
    </StatWrap>
  );
};

StatsPrice.propTypes = {
  last: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
};

export default StatsPrice;
