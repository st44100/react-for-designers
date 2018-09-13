import React from 'react';
import styled from 'styled-components';

import Rect from './Rect';

const compositions = [
  { x: 10, y: 10, w: 10, h: 10, stroke: '#888', fill: '#FFF' },
  { x: 55, y: 70, w: 10, h: 10, stroke: '#888', fill: '#F00'  },
  { x: 65, y: 10, w: 20, h: 20, stroke: '#888', fill: '#0F0'  },
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
  </div>
);

export default ArtBoard;