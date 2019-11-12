## 资料

- [源码](https://github.com/facebook/immutable-js/)

## API

```
```

fromJS
```
将普通JS对象或者数据转换成 immutable map或者list
```

is
```
类似Object.is(v1,v2)方法, 但是该方法是值比较
```

get
```js
const { get } = require('immutable')
get([ 'dog', 'frog', 'cat' ], 2) // 'frog'
get({ x: 123, y: 456 }, 'x') // 123
get({ x: 123, y: 456 }, 'z', 'ifNotSet') // 'ifNotSet'
```
has
```js
const { has } = require('immutable')
has([ 'dog', 'frog', 'cat' ], 2) // true
has([ 'dog', 'frog', 'cat' ], 5) // false
has({ x: 123, y: 456 }, 'x') // true
has({ x: 123, y: 456 }, 'z') // false
```
remove
```js
const { remove } = require('immutable')
const originalArray = [ 'dog', 'frog', 'cat' ]
remove(originalArray, 1) // [ 'dog', 'cat' ]
console.log(originalArray) // [ 'dog', 'frog', 'cat' ]
const originalObject = { x: 123, y: 456 }
remove(originalObject, 'x') // { y: 456 }
console.log(originalObject) // { x: 123, y: 456 }
```
set
```js
const { set } = require('immutable')
const originalArray = [ 'dog', 'frog', 'cat' ]
set(originalArray, 1, 'cow') // [ 'dog', 'cow', 'cat' ]
console.log(originalArray) // [ 'dog', 'frog', 'cat' ]
const originalObject = { x: 123, y: 456 }
set(originalObject, 'x', 789) // { x: 789, y: 456 }
console.log(originalObject) // { x: 123, y: 456 }
```
update
```js
const { update } = require('immutable')
const originalArray = [ 'dog', 'frog', 'cat' ]
update(originalArray, 1, val => val.toUpperCase()) // [ 'dog', 'FROG', 'cat' ]
console.log(originalArray) // [ 'dog', 'frog', 'cat' ]
const originalObject = { x: 123, y: 456 }
update(originalObject, 'x', val => val * 6) // { x: 738, y: 456 }
console.log(originalObject) // { x: 123, y: 456 }
```
getIn
```js
const { getIn } = require('immutable')
getIn({ x: { y: { z: 123 }}}, ['x', 'y', 'z']) // 123
getIn({ x: { y: { z: 123 }}}, ['x', 'q', 'p'], 'ifNotSet') // 'ifNotSet'
hasIn 
setIn
removeIn
updateIn
类似getIn
```
merge (保持原有集合不变,合并未出现的字段，最后返回新集合)
```js
const { merge } = require('immutable')
const original = { x: 123, y: 456 }
merge(original, { y: 789, z: 'abc' }) // { x: 123, y: 789, z: 'abc' }
console.log(original) // { x: 123, y: 456 }
```
mergeWith (保持原有集合不变,且按合并函数合并未出现的字段，若没有对应新字段出现则保持源数据，最后返回新集合)
```js
const { mergeWith } = require('immutable')
const original = { x: 123, y: 456 }
mergeWith(
  (oldVal, newVal) => oldVal + newVal,
  original,
  { y: 789, z: 'abc' }
) // { x: 123, y: 1245, z: 'abc' }
console.log(original) // { x: 123, y: 456 }
```
mergeDeep
```js
const { mergeDeep } = require('immutable')
const original = { x: { y: 123 }}
mergeDeep(original, { x: { z: 456 }}) // { x: { y: 123, z: 456 }}
console.log(original) // { x: { y: 123 }}
mergeDeepWith 类似
```

**其他的暂时省略**

## 基本使用

state 转换成immutable对象
```
```

解析immutable对象取其中值
```
```

immutable新数据合并
```js
数组:

对象:
```
