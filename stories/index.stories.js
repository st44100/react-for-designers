import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, select, text, number } from '@storybook/addon-knobs/react';

import Welcome from '../src/day0/Welcome';
import MyButton from '../src/day0/MyButton';
import MyButtonTwo from '../src/day0/MyButtonTwo';
import Artboard from '../src/day2/Artboard';

const options = {
  start: 'start',
  active: 'active',
  stop: 'stop'
};

storiesOf('Animation', module)
  .addDecorator(withKnobs)
  .add('animation', () => {
    const animationValue = select('Animation', options, 'start', 'ANIMATION');
    console.log(animationValue);
    return (
      <Artboard animation={animationValue} />
    );
  });