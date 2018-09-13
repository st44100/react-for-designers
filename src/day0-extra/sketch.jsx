import React from 'react';
import styled from 'styled-components';

import Rect from './Rect';
import Square from './Square';

const compositions = [
  { x: 10, y: 10, w: 10, h: 10, stroke: '#888', fill: '#FFF' },
  { x: 55, y: 70, w: 10, h: 40, stroke: '#888', fill: '#F00'  },
  { x: 65, y: 10, w: 70, h: 20, stroke: '#888', fill: '#0F0'  },
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