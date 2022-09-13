import React from 'react';
import Classes from './Button.module.css';
import Button from '@mui/material/Button';

export const SubmitButton = (props) => {
  return (
    <Button
      className={Classes.button}
      type={props.type || 'button'}
      onClick={props.onClick}
      variant="contained"
      color="secondary"
      size="large"
    >
      {props.children}
    </Button>
  );
};
