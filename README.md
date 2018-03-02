#	i2
__Character Encoding and Decoding Toolkit__

Collection of character encoding methods.

##	Table of contents

*	[Get Started](#get-started)
*	[API](#api)
*	[References](#references)

##	Links

*	[CHANGE LOG](./CHANGELOG.md)
*	[Homepage](https://github.com/YounGoat/ecmascript.unicoding)

##	Get Started

```javascript
const i2 = require('i2');

i2.unicode2utf8(20320);
// RETURN [0xE4, 0xBD, 0xA0];

i2.unicode2utf16.be(20320);
// RETURN [0x4F, 0x60]

i2.unicode2utf32.be(20320);
// RETURN [0x00, 0x00, 0x4F, 0x60]
```

##	API

*	number[] __i2.unicode2utf8__(number *unicode*)
*	number[] __i2.unicode2utf16__(number *unicode*, "be" | "le" *type* = `"be"`)
*	number[] __i2.unicode2utf16.be__(number *unicode*)
*	number[] __i2.unicode2utf16.le__(number *unicode*)
*	number[] __i2.unicode2utf32__(number *unicode*, "be" | "le" *type* = `"be"`)
*	number[] __i2.unicode2utf32.be__(number *unicode*)
*	number[] __i2.unicode2utf32.le__(number *unicode*)

##  References