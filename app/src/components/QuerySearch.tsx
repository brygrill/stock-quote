import React from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { TextField, CircularProgress } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import { iex } from '../config';

const fetchSearch = async (
  key: string,
  { fragment }: { fragment: string | undefined },
) => {
  if (fragment) {
    const url = iex.search(fragment);
    const { data } = await axios.get(url);
    return data;
  }
};

const QuerySearch = () => {
  // state
  const [value] = React.useState<string | null>(null);
  const [inputValue, setInputValue] = React.useState<string | undefined>('');
  const [options, setOptions] = React.useState<string[]>([]);

  // hooks
  const navigateTo = useNavigate();
  const { isFetching, error, data } = useQuery(
    ['search', { fragment: inputValue }],
    fetchSearch,
  );

  // reflects change in chars entered
  const handleValueChange = (event: any, newValue: string | undefined) => {
    setInputValue(newValue);
  };

  // select from autocomplete options
  const handleValueSelect = (event: any, newInputValue: string | null) => {
    // route to quote page
    navigateTo(`/quote/${newInputValue}`);

    // clear inputs
    setInputValue('');
    setOptions([]);
  };

  React.useEffect(() => {
    if (data) {
      const d = data.map((option: { symbol: string }) => option.symbol);
      setOptions(d);
    }
  }, [data]);

  React.useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return (
    <div>
      <Autocomplete
        // loading={isFetching}
        freeSolo
        value={value}
        onChange={handleValueSelect}
        inputValue={inputValue}
        onInputChange={handleValueChange}
        options={options}
        filterOptions={(options) => options}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for a stock"
            margin="normal"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {isFetching ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </div>
  );
};

export default QuerySearch;
