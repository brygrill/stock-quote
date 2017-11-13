import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectAutoComplete } from 'react-instantsearch/connectors';
import { Search, Image } from 'semantic-ui-react';

import searchByAlgolia from './search-by-algolia.png';

const propTypes = {
  hits: PropTypes.array.isRequired,
  refine: PropTypes.func.isRequired,
};

const formatHits = hits => {
  return (
    <Search.Result title={hits.Symbol} description={hits['Security Name']} />
  );
};

class SymbolSearch extends Component {
  state = {
    searching: false,
  };

  onSearchChange = event => {
    const searching = event.target.value.length;
    this.props.refine(event.target.value);
    this.setState({ searching });
  };

  render() {
    return (
      <div>
        <Search
          onSearchChange={this.onSearchChange}
          results={this.props.hits}
          resultRenderer={formatHits}
        />
        <Image src={searchByAlgolia} />
      </div>
    );
  }
}

SymbolSearch.propTypes = propTypes;
export default connectAutoComplete(SymbolSearch);
