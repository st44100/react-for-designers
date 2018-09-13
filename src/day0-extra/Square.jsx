import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  border: solid  1px ${(props) => props.stroke };
  padding: 10px;
  background-color: ${(props) => props.fill };
`;


const Square = (props) => (
  <Div {...props} />
);

export default Square;