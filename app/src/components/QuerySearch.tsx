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
    console.log(data);
    return data;
  }
};

const options = ['one', 'two', 'three'];
const QuerySearch = () => {
  const [value, setValue] = React.useState<string | null>(null);
  const [inputValue, setInputValue] = React.useState<string | undefined>('');
  const info = useQuery(['search', { fragment: inputValue }], fetchSearch);
  console.log(info);

  // reflects change in chars entered
  const handleValueChange = (event: any, newValue: string | undefined) => {
    console.log('fetch iex data');
    setInputValue(newValue);
  };

  // select from autocomplete options
  const handleValueSelect = (event: any, newInputValue: string | null) => {
    console.log('route to new page');
    setValue(newInputValue);
  };

  return (
    <div>
      <Autocomplete
        freeSolo
        value={value}
        onChange={handleValueSelect}
        inputValue={inputValue}
        onInputChange={handleValueChange}
        options={options}
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
