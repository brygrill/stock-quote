import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, List, Popup } from 'semantic-ui-react';
import Disclaimer from './Disclaimer';

const DisclaimerWrap = styled.div`
  float: right;
  font-size: 0.8rem;
  margin-top: -1rem;
  color: #a7a2a2;
`;

const Item = ({ title, value }) => {
  return (
    <List.Item>
      <List.Content floated="right">{value}</List.Content>
      <List.Content floated="left" style={{ color: '#a0a0a0' }}>
        {title}
      </List.Content>
    </List.Item>
  );
};

const StatsDetails = ({ data }) => {
  return (
    <React.Fragment>
      <Grid.Row columns={4}>
        <Grid.Column>
          <List>
            <Item title="Open" value={data.open} />
            <Item title="High" value={data.high} />
            <Item title="Low" value={data.low} />
          </List>
        </Grid.Column>
        <Grid.Column>
          <List>
            <Item title="Vol" value={data.vol} />
            <Item title="P/E" value={data.peRatio} />
            <Item title="Mkt Cap" value={data.marketCap} />
          </List>
        </Grid.Column>
        <Grid.Column>
          <List>
            <Item title="52W H" value={data.week52High} />
            <Item title="52W L" value={data.week52Low} />
            <Item title="52W Ch" value={data.week52Ch} />
          </List>
        </Grid.Column>
        <Grid.Column>
          <List>
            <Item title="Yield" value={data.yield} />
            <Item title="Beta" value={data.beta} />
            <Item title="EPS" value={data.eps} />
          </List>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ padding: 0 }}>
        <Grid.Column floated="right" width={16}>
          <Popup
            on="click"
            trigger={<DisclaimerWrap>Disclaimer</DisclaimerWrap>}
            content={<Disclaimer session={false} />}
          />
        </Grid.Column>
      </Grid.Row>
    </React.Fragment>
  );
};

StatsDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default StatsDetails;
