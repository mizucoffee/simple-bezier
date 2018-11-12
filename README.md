# simple-bezier
座標配列と直線辺りの分割数からn次ベジェの座標配列に変換するnpmパッケージ

## Installation

```
yarn add kawakawaritsuki/simple-bezier
```

## How to use

> [ [x,y], [x,y] ... ]

という形式の配列と細かさを

```
const bezier = require('simple-bezier')
bezier([[100,100],[500,100],[100,500],[500,500]],100)
```

みたいな感じで渡すと、曲線に沿った点の配列が返ってきます。

n次ベジェに対応。
