import React from 'react';
// import { Card } from './Card';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { SubmitButton } from './Button';
import Typography from '@mui/material/Typography';

import classes from './ErrorModal.module.css';

export const ErrorModal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <CardContent className={classes.header}>
          <Typography variant="h3" component="div">
            {props.title}
          </Typography>
        </CardContent>
        <CardContent>
          <div className={classes.content}>
            <Typography variant="h4">{props.message}</Typography>
          </div>
          <footer className={classes.actions}>
            <SubmitButton onClick={props.onConfirm}>Okay</SubmitButton>
          </footer>
        </CardContent>
      </Card>
    </>
  );
};
