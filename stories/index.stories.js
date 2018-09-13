import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Welcome from '../src/day0/Welcome';
import MyButton from '../src/day0/MyButton';
import MyButtonTwo from '../src/day0/MyButtonTwo';
import ArtBoard from '../src/day0-extra/sketch';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome />);

storiesOf('MyButton', module)
  .add('with text', () => <MyButton label={"My simple Button"} />);

  storiesOf('MyButtonTwo', module)
  .add('with text', () => <MyButtonTwo label={"My simple Button Two"} />);

  storiesOf('Day0-extra', module)
  .add('My Rectangles', () => <ArtBoard />);
