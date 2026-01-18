# string-native-code
Useful package that exports the string `[native code]`.

```javascript
const NATIVE_CODE = require("string-native-code")

console.log(NATIVE_CODE) // outputs: [native code]

console.log(typeof NATIVE_CODE) // outputs: string

const someNativeFunction = Object.create

const someNotNativeFunction = () => {
  console.log("this isnt native")
}

function fakeNativeFunction() {
  /* [native code] */
}

function isNative(fn) {
  return fn.toString().includes(NATIVE_CODE)
}


console.log(isNative(someNativeFunction)) // outputs: true
console.log(isNative(someNotNativeFunction)) // outputs: false
console.log(isNative(fakeNativeFunction)) // outputs: true
```