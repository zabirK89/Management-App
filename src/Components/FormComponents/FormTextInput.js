import React from "react"
import { useField } from 'formik';
import { TextField, TextFieldProps } from '@mui/material';

function FormTextInput({
  name,
  margin = 'dense',
  fullWidth = true,
  ...rest
}){
  const [field, meta] = useField(name);
  const errorText = meta.error && meta.touched ? meta.error : '';
  const hasError = !!errorText;
  return (
    <TextField
      className="text-input"
      margin={margin}
      fullWidth={fullWidth}
      {...field}
      {...rest}
      error={hasError}
      helperText={errorText}
    />
  );
}

export default FormTextInput;
