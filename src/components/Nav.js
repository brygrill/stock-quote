import React, { useContext } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Menu, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import { DataContext } from '../components/WithDataContext';
import { quoteFormatting } from '../utils/format';

const Title = styled.h1`
  font-family: 'Staatliches', cursive;
  font-size: 2.25rem;
  font-weight: 300;
  text-align: center;
  padding: 0.5rem;
  margin: 0;
`;

const QuoteSymbol = styled.span`
  color: #fff !important;
`;

const setDisplay = (current, quote, i) => {
  // if current quote in indicies, use that data
  // so display is in sync
  if (!_.isEmpty(current)) {
    if (current.quote.symbol === i) {
      return quoteFormatting(current.quote);
    } else {
      return quoteFormatting(quote);
    }
  }
  // if on homepage, dont worry about syncing quote
  return quoteFormatting(quote);
};

const Nav = props => {
  const context = useContext(DataContext);
  return (
    <React.Fragment>
      <Title>
        <Link to="/" style={{ color: 'black' }}>
          quotes.ninja
        </Link>
      </Title>
      <Menu style={{ marginTop: 0 }} widths={4} inverted>
        {_.map(context.indiciesData.quotes, (q, i) => {
          const display = setDisplay(context.quoteData, q.quote, i);
          return (
            <Menu.Item key={i} active>
              <Link to={`/${_.lowerCase(i)}`}>
                <Header as="h5" inverted color={display.status}>
                  <QuoteSymbol>{i}</QuoteSymbol>
                  <span>
                    <div>{display.latestPriceSimple}</div>
                    <div>{display.changePercent}</div>
                  </span>
                </Header>
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </React.Fragment>
  );
};

export default Nav;
