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

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  mih-height: 500px;
`;

const ArtBoard = (props) => {
  const {
    numOfRects,
    numOfSquares,
    squareSizeMin,
    squareSizeMax,
    hueMin,
    hueMax,
    saturationMin,
    saturationMax,
    lightnessMin,
    lightnessMax,
  } = props;

  const compositions = range(numOfRects).map((i) => ({
    x: randomInt(10, 500),
    y: randomInt(10, 500),
    w: randomInt(10, 100),
    h: randomInt(10, 100),
    stroke: '#888',
    fill: randomHslColor(hueMax, hueMin, saturationMax, saturationMin, lightnessMax, lightnessMin)
  }));

  const square_composition = range(numOfSquares).map((i) => ({
    x: randomInt(10, 500),
    y: randomInt(10, 500),
    size: randomInt(squareSizeMin, squareSizeMax),
    stroke: '#888',
    fill: randomHslColor(hueMax, hueMin, saturationMax, saturationMin, lightnessMax, lightnessMin)
  }));

  return (
    <StyledDiv>
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
    </StyledDiv>
  );
};

export default ArtBoard;