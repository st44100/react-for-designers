import React from 'react';
import styled from 'styled-components';

import posed from 'react-pose';

const Root = styled.div`
  border: solid 1px #ccc;
  width: 100vw;
  height: 100vh;
`;

const Box = posed.div({
  start: {
    x: 0,
    y: 0
  },
  active: {
    x: 100,
    y: 100,
    transition: {
      default: {
        ease: 'linear',
        duration: 500
      }
    }
  },
  stop: {
    x: 100,
    y: 100
  }
});

const StyledBox = styled(Box)`
  diplay: block;
  background-color: red;
  border: solid 1px #ccc;
  width: 100px;
  height: 100px;
`;

const Artboard = ({ animation = 'start' }) => {
  return (
    <Root>
      <StyledBox  pose={animation} />
    </Root>
  );
}

export default Artboard;