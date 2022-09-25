import React from 'react';
import ReactDOM from 'react-dom/';
// import { Card } from './Card';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { SubmitButton } from './Button';
import Typography from '@mui/material/Typography';

import classes from './ErrorModal.module.css';

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

// eslint-disable-next-line no-unused-vars
const ModalOvrlay = (props) => {
  return (
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
  );
};

export const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOvrlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};
