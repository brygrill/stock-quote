import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { InstantSearch } from 'react-instantsearch/dom';
import Search from './Search';
import Quote from './Quote';

const QuotePage = ({ match }) => {
  return <Quote symbol={match.params.id} />;
};

const SearchPage = props => {
  return (
    <InstantSearch
      appId={process.env.REACT_APP_ALGOLIA_ID}
      apiKey={process.env.REACT_APP_ALGOLIA_API_KEY}
      indexName={process.env.REACT_APP_ALGOLIA_INDEX}
    >
      <Search push={props.history.push} />
    </InstantSearch>
  );
};

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={SearchPage} />
          <Route path="/:id" component={QuotePage} />
        </div>
      </Router>
    );
  }
}
