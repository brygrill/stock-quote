import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { TextField } from '@material-ui/core';
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
  const [value, setValue] = React.useState<string | null>(null);
  const [inputValue, setInputValue] = React.useState<string | undefined>('');
  const [options, setOptions] = React.useState<string[]>([]);

  const { status, error, data } = useQuery(
    ['search', { fragment: inputValue }],
    fetchSearch,
  );

  // reflects change in chars entered
  const handleValueChange = (event: any, newValue: string | undefined) => {
    setInputValue(newValue);
  };

  // select from autocomplete options
  const handleValueSelect = (event: any, newInputValue: string | null) => {
    console.log('route to new page');
    console.log(newInputValue)
    setValue(newInputValue);
  };

  React.useEffect(() => {
    if (data) {
      const d = data.map((option: { symbol: string }) => option.symbol);
      setOptions(d)
    }
  }, [data]);

  return (
    <div>
      <Autocomplete
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
          />
        )}
      />
    </div>
  );
};

export default QuerySearch;
