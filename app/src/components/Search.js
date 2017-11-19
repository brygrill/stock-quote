import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectAutoComplete } from 'react-instantsearch/connectors';
import { Grid, Search } from 'semantic-ui-react';

const propTypes = {
  hits: PropTypes.array.isRequired,
  refine: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  size: PropTypes.string,
};

const defaultProps = {
  size: 'large',
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
      <Grid.Row>
        <Grid.Column width={16}>
          <Grid.Row>
            <Search
              className="searchFlex"
              fluid
              size={this.props.size}
              placeholder="Search by Company or Symbol"
              value={this.state.searchValue}
              onSearchChange={this.onSearchChange}
              onResultSelect={this.onResultSelect}
              results={hits.slice(0, 9)}
            />
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

SymbolSearch.propTypes = propTypes;
SymbolSearch.defaultProps = defaultProps;

export default connectAutoComplete(SymbolSearch);
