import React from 'react';
import styled from 'styled-components';

import Rect from './Rect';
import Square from './Square';
import { randomInt, randomHslColor } from './randomGenerator';

/**
 * Range helper.
 * @params {Number} Length of array.
 * @return {Array<Number>} Array with range.
 */
function range(range = 0) {
  return Array.from(Array(range).keys())
}

const compositions = range(100).map((i) => ({
  x: randomInt(10, 500),
  y: randomInt(10, 500),
  w: randomInt(10, 100),
  h: randomInt(10, 100),
  stroke: '#888',
  fill: randomHslColor()
}));

const square_composition = range(100).map((i) => ({
  x: randomInt(10, 500),
  y: randomInt(10, 500),
  size: randomInt(10, 100),
  stroke: '#888',
  fill: randomHslColor()
}));

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