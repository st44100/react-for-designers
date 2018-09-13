import React from 'react';
import styled from 'styled-components';

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledFieldSet = styled.fieldset`
  flex: 1;
`;

const Gui = (props) => {
  const {
    onChangeNumOfRects,
    onChangeNumOfSquares,
    onChangeHueRange,
    onChangeSaturationRange,
    onChangeLightnessRange,
    onChangeSizeOfSquares,
  } = props;

  return (
    <StyledForm>
      <StyledFieldSet>
        <legend>Rectangles</legend>
        <label htmlFor="num-of-rects-slider">Amount</label>
        <Slider id="num-of-rects-slider" defaultValue={10} min={1} max={255} onChange={onChangeNumOfRects} />
      </StyledFieldSet>

      <StyledFieldSet>
        <legend>Squares</legend>
        <label htmlFor="num-of-squares-slider">Amount</label>
        <Slider id="num-of-squares-slider" defaultValue={10} min={1} max={255} onChange={onChangeNumOfSquares} />

        <label htmlFor="square-sid-range-slider">Size</label>
        <Range id="square-sid-range-slider" defaultValue={[5, 30]} min={0} max={300} onChange={onChangeSizeOfSquares} />
      </StyledFieldSet>

      <StyledFieldSet>
        <legend>Color</legend>
        <label htmlFor="hue-range-slider">Hue</label>
        <Range id="hue-range-slider" defaultValue={[0, 360]} min={0} max={360} onChange={onChangeHueRange} />

        <label htmlFor="saturation-range-slider">Saturation</label>
        <Range id="hue-saturation-slider" defaultValue={[0, 100]} min={0} max={100} onChange={onChangeSaturationRange} />

        <label htmlFor="lightness-range-slider">Lightness</label>
        <Range id="hue-lightness-slider" defaultValue={[0, 100]} min={0} max={100} onChange={onChangeLightnessRange} />
      </StyledFieldSet>
    </StyledForm>
  );
};

export default Gui;

