import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { useFormikContext } from 'formik';


export function ButtonPrimary({
  type = 'submit',
  variant = 'contained',
  ...props
}){
  return <Button type={type} variant={variant} fullWidth {...props}></Button>;
}

export function SubmitButton({
  label = 'Submit123',
  variant = 'contained',
  color = 'primary',
  ...props
}){
  const formikContext = useFormikContext();
  const { isSubmitting: disabled } = formikContext;

  return (
    <Button
      type="submit"
      // fullWidth={fullWidth}
      variant={variant}
      color={color}
      {...props}
      disabled={disabled}
    >
      {label} {disabled ? '...' : ''}
    </Button>
  );
}
