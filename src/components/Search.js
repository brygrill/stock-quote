import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectAutoComplete } from 'react-instantsearch/connectors';
import { Search, Popup, Image } from 'semantic-ui-react';

import searchByAlgolia from '../images/algolia-mark-blue.png';

const propTypes = {
  hits: PropTypes.array.isRequired,
  refine: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  size: PropTypes.string,
  compact: PropTypes.bool,
};

const defaultProps = {
  size: 'large',
  compact: false,
};

const formatHits = hits => {
  return hits.map(item => {
    return { title: item.symbol, description: item.name };
  });
};

class SymbolSearch extends Component {
  state = {
    searchValue: '',
  };

  onSearchChange = event => {
    const searchValue = event.target.value;
    this.setState({ searchValue });
    this.props.refine(searchValue);
  };

  onResultSelect = (event, { result }) => {
    this.setState({ searchValue: '' });
    this.props.history.push({
      pathname: `${result.title.toLowerCase()}`,
    });
  };

  render() {
    const hits = formatHits(this.props.hits);
    return (
      <div className="searchFlex">
        <Search
          fluid
          style={{ width: '90%' }}
          size={this.props.size}
          placeholder="Enter Company or Symbol"
          value={this.state.searchValue}
          onSearchChange={this.onSearchChange}
          onResultSelect={this.onResultSelect}
          results={hits.slice(0, 9)}
        />
        {this.props.compact ? (
          <Popup
            inverted
            on="click"
            trigger={
              <Image
                style={{ width: '30px', marginLeft: '1rem' }}
                src={searchByAlgolia}
                size="mini"
              />
            }
          >
            <Popup.Content>
              <a href="https://www.algolia.com/">Search by Algolia</a>
            </Popup.Content>
          </Popup>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <Image
              src={searchByAlgolia}
              size="mini"
              href="https://www.algolia.com/"
            />
            <div style={{ color: '#fff', fontSize: '1rem' }}>by Algolia</div>
          </div>
        )}
      </div>
    );
  }
}

SymbolSearch.propTypes = propTypes;
SymbolSearch.defaultProps = defaultProps;

export default connectAutoComplete(SymbolSearch);
