import React from 'react';

export const MyParagraph = (props) => {
  console.log('My Paragraph is Running');
  return <p>{props.children}</p>;
};
