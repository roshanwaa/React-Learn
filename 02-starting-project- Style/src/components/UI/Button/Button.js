// import React from 'react';
import styled from 'styled-components';

// import './Button.css';

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #0000009f;
  color: white;
  background: #1e3a30ac;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  border-radius: 12px;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #10875e8b;
    border-color: #000000;
    color: #000000;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
