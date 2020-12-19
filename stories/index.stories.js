import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { State, Store } from '@sambego/storybook-state';
import { debounce } from 'throttle-debounce';


import Welcome from '../src/day0/Welcome';
import MyButton from '../src/day0/MyButton';
import MyButtonTwo from '../src/day0/MyButtonTwo';
import ArtBoard from '../src/day0-extra/ArtBoard';
import Gui from '../src/day0-extra/Gui';

const store = new Store({
  numOfRects: 10,
  numOfSquares: 10,
  squareSizeMin: 5,
  squareSizeMax: 300,
  hueMin: 0,
  hueMax: 360,
  saturationMin: 0,
  saturationMax: 100,
  lightnessMin: 0,
  lightnessMax: 100,
});

const THROTTLE_TIME = 300;


const changeNumOfRects = debounce(THROTTLE_TIME, (val) => {
  store.set({ numOfRects: val });
});

const changeNumOfSquares = debounce(THROTTLE_TIME, (val) => {
  store.set({ numOfSquares: val });
});

const changeSizeOfSquares = debounce(THROTTLE_TIME, (val) => {
  let [squareSizeMin, squareSizeMax] = val;
  store.set({ squareSizeMax, squareSizeMin });
});

const changeHueRange = debounce(THROTTLE_TIME, (val) => {
  let [hueMin, hueMax] = val;
  store.set({ hueMax, hueMin });
});

const changeSaturationRange = debounce(THROTTLE_TIME, (val) => {
  let [saturationMin, saturationMax] =val;
  store.set({ saturationMax, saturationMin });
});

const changeLightnessRange = debounce(THROTTLE_TIME, (val) => {
  let [lightnessMin, lightnessMax] = val;
  store.set({ lightnessMax, lightnessMin });
});

storiesOf('Welcome', module).add('to Storybook', () => <Welcome />);

storiesOf('MyButton', module)
  .add('with text', () => <MyButton label={"My simple Button"} />);

  storiesOf('MyButtonTwo', module)
  .add('with text', () => <MyButtonTwo label={"My simple Button Two"} />);

  storiesOf('Day0-extra', module)
  .add('My Rectangles', () => (
    <State store={store}>
      <Gui
        onChangeNumOfRects={changeNumOfRects}
        onChangeNumOfSquares={changeNumOfSquares}
        onChangeSizeOfSquares={changeSizeOfSquares}
        onChangeHueRange={changeHueRange}
        onChangeSaturationRange={changeSaturationRange}
        onChangeLightnessRange={changeLightnessRange}
      />
      <ArtBoard {...store} />
    </State>
  ));
