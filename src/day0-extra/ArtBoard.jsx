import React from 'react';
import styled from 'styled-components';

import Rect from './Rect';
import Square from './Square';
import { randomInt } from './randomGenerator';

const compositions = [
  {
    x: randomInt(10, 20),
    y: randomInt(10, 20),
    w: randomInt(10, 20),
    h: randomInt(10, 20),
    stroke: '#888',
    fill: '#FFF'
  },
  {
    x: randomInt(20, 105),
    y: randomInt(20, 105),
    w: randomInt(10, 105),
    h: randomInt(10, 105),
    stroke: '#888',
    fill: '#F00'
  },
  {
    x: randomInt(65, 120),
    y: randomInt(10, 120),
    w: randomInt(70, 120),
    h: randomInt(70, 120),
    stroke: '#888',
    fill: '#0F0'
  },
];

const square_composition = [
  { x: 160, y: 110, size: 10, stroke: '#888', fill: 'rgb(127, 127, 127)' },
  { x: 135, y: 170, size: 10, stroke: '#888', fill: 'rgb(127, 255, 255)'  },
  { x: 115, y: 110, size: 20, stroke: '#888', fill: 'rgb(255, 127, 255)'  },
];

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  mih-height: 500px;
`;

const ArtBoard = () => (
  <div>
    {
      compositions.map((c) => (
        <Rect {...c}/>
      ))
    }
    {
      square_composition.map((c) => (
        <Square {...c}/>
      ))
    }
  </div>
);

export default ArtBoard;