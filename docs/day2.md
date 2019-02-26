# アジェンダ

- Animationについて
- Animation作ってみよう

## Popmotion POSE

PopmotionのPOSEを使います。

[Popmotion POSE](https://popmotion.io/pose/)

## POSEのドキュメント

###

### Example

https://popmotion.io/pose/examples/


## とりあえず動かす


```sh
yarn start
```


## ちょっと変えよう

```jsx
const Box = posed.div({
  start: {
    x: 0,
    y: 0
  },
  active: {
    x: 100,
    y: 100
  },
  stop: {
    x: 0,
    y: 0
  }
});
```

## トランジション変える

```jsx
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
    x: 0,
    y: 0
  }
});
```

##