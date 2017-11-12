import React, { Component } from 'react';
import {
  Hits,
  SearchBox,
  Highlight,
  Pagination,
} from 'react-instantsearch/dom';

const Stock = ({ hit }) => {
  // console.log(hit);
  return (
    <div style={{ marginTop: '10px' }}>
      <span className="hit-name">
        <Highlight attributeName="Symbol" hit={hit} />
      </span>
    </div>
  );
};

export default class Search extends Component {
  state = {
    searching: false,
  };
  onSearchChange = event => {
    const searching = event.target.value.length;
    this.setState({ searching });
  };
  render() {
    const { searching } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col" />
          <div className="col-8">
            <SearchBox onChange={this.onSearchChange} />
            <div style={searching ? { display: 'inherit' } : { display: 'none' }}>
              <Hits hitComponent={Stock} />
              <Pagination />
            </div>
          </div>
          <div className="col" />
        </div>
      </div>
    );
  }
}
