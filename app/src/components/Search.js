import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectAutoComplete } from 'react-instantsearch/connectors';
import { Search, Image } from 'semantic-ui-react';

import searchByAlgolia from '../images/search-by-algolia.png';

const propTypes = {
  hits: PropTypes.array.isRequired,
  refine: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};

const formatHits = hits => {
  return hits.map(item => {
    return { title: item.Symbol, description: item['Security Name'] };
  });
};

class SymbolSearch extends Component {
  onSearchChange = event => {
    this.props.refine(event.target.value);
  };

  onResultSelect = (event, { result }) => {
    this.props.push({
      pathname: `${result.title.toLowerCase()}`,
    });
  };

  render() {
    const hits = formatHits(this.props.hits);
    return (
      <div>
        <Search
          onSearchChange={this.onSearchChange}
          onResultSelect={this.onResultSelect}
          results={hits}
        />
        <Image src={searchByAlgolia} />
      </div>
    );
  }
}

SymbolSearch.propTypes = propTypes;

export default connectAutoComplete(SymbolSearch);
