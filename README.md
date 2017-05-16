# buffer-bits

[![Build Status](https://travis-ci.org/strawhatboy/buffer-bits.svg?branch=master)](https://travis-ci.org/strawhatboy/buffer-bits)

This component is able to hold a set of bits (NOT bytes) and do operations on them. Could be used to analyze some protocol by yourself...

## Quick Example
```js
var Bits = require('buffer-bits');
var myBuffer = Buffer.from([20, 30, 40, 50]);

// starting from bit offset 3
// and capture 26 bits after
var myBits = Bits.from(myBuffer, 3, 26);    

console.log(myBits.toBinaryString());
// 0b10100000111100010100000110
```

## Features

1. Class Methods
    * Bits.from(buffer, offset, length) 
        - create Bits from existing Buffer object
    * Bits.from(bits, offset, length)
        - create Bits from existing Bits object
2. Constructor
    * new Bits(buffer, offset, length) *
        - there's __NO__ params validating in this constructor, please __DON'T__ use it for creating new instance...
2. Properties (read-only)
    * length
        - count of the total bits
    * byteLength
        - total bytes the Bits object holds
    * buffer
        - inner Buffer object hold by Bits. Take care to __NOT__ write to this buffer directly.
    * startOffset *
        - represents the start bit offset inside the byte. This property should be __RARELY__ used, use it when you know what you're doing...
3. Methods
    * readInt()
        - read integer value of current bits
    * readBit(index)
        - read the bit value (1: true, 0: false) at position 'index'
    * setBit(index, value)
        - set the bit value (1: true, 0: false) at position 'index'
    * concat(bits)
        - create Bits by concating another Bits object

## More Examples
```js
console.log(myBits.length);
// 26

console.log(myBits.byteLength);
// 4

console.log(myBits.startOffset);
// 6

console.log(myBits.buffer);
// <Buffer 02 83 c5 06>

console.log(myBits.readInt());
// 42190086

console.log(myBits.readBit(20));
// false

myBits.setBit(20, true);
console.log(myBits.readBit(20));
// true
```

## More More Examples
Please check the tests in `test` folder to see more details.