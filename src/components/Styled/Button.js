import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: none;
  font: inherit;
  color: #fff;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  background-color: #268bd2;
  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #3e9bdc;
  }
  ${props =>
    props.deletion &&
    css`
      background: #ff4063;
      opacity: 0.5;
      &:hover {
        opacity: 1;
        background: #ff4063;
      }
    `}
`;

const button = ({ className, clicked, children, deletion }) => (
  <StyledButton className={className} onClick={clicked} deletion={deletion}>
    {children}
  </StyledButton>
);

export default button;
