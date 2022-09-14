import React from 'react';
import { Card } from './Card';
import { SubmitButton } from './Button';
import Classes from './ErrorModal.module.css';

export const ErrorModal = (props) => {
  return (
    <>
      <div className={Classes.backdrop} />
      <Card className={Classes.modal}>
        <herder className={Classes.header}>
          <h2>{props.title}</h2>
        </herder>
        <div className={Classes.content}>
          <p>{props.message}</p>
        </div>
        <footer>
          <SubmitButton className={Classes.actions}>Okay</SubmitButton>
        </footer>
      </Card>
    </>
  );
};
