import React, { Component } from 'react';
import { InstantSearch } from 'react-instantsearch/dom';

import Search from './Search';

export default class App extends Component {
  render() {
    return (
      <InstantSearch
        appId={process.env.REACT_APP_ALGOLIA_ID}
        apiKey={process.env.REACT_APP_ALGOLIA_API_KEY}
        indexName={process.env.REACT_APP_ALGOLIA_INDEX}
      >
        <Search />
      </InstantSearch>
    );
  }
}
