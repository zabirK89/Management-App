import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useField } from 'formik';
import { Autocomplete, AutocompleteProps, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { onSearchUsers } from '../../Redux/Action/useraction';

function FormUsersPicker(
  name,
  fullWidth = true,
  disabled = false,
  margin = 'dense',
  label,
  ...rest
) {
  const [field, meta, { setValue }] = useField(name);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onChange, ...restField } = field;
  const dispatch = useDispatch();
  const errorText = meta.error && meta.touched ? meta.error : '';
  const hasError = !!errorText;
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState([]);

  const handleInputChange = (event, value) => {
    setInputValue(value);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(handleInputChange, 400),
    []
  );
  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, []);

  useEffect(() => {
    let active = true;
    if (field.value) {
      setUsers([field.value]);
    }
    async function fetchUsersByText(text) {
      const users = await dispatch(onSearchUsers(text));
      if (!active) return;
      setUsers(users);
    }
    inputValue.length > 2 ? fetchUsersByText(inputValue) : setUsers([]);
    return () => {
      active = false;
    };
  }, [field.value, inputValue]);
  return (
    <Autocomplete
      options={users}
      clearOnBlur
      onInputChange={debouncedChangeHandler}
      onChange={(event, value) => {
        setValue(value);
      }}
      noOptionsText="Start typing or try different term"
      disablePortal
      filterOptions={(x) => x}
      {...restField}
      {...rest}
      getOptionLabel={(option) => `${option.name} (${option.email})`}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth={fullWidth}
          margin={margin}
          label={label}
          disabled={disabled}
          error={hasError}
          helperText={errorText}
        />
      )}
    />
  );
}

export default FormUsersPicker;
