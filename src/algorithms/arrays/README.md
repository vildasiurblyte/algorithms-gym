## Data structure: Arrays


If const a = [] isn't an array, what is it?

The most fundamental idea of an array is that it's just a block of memory — specifically, a contiguous memory space. "Contiguous" means that the memory is unbroken — all in one piece.

An array is a structure where there are zero or more blocks of memory, all of the same type, laid out in a row.

So, in simple terms:
An array is just a simple, continuous chunk of memory.

## An example in node

Node.js has a built-in feature called ArrayBuffer, which works similarly like a basic array in lower-level languages.

const a = new ArrayBuffer(6);

```javascript
const a = new ArrayBuffer(6)
```

When logged, it looks like this:

```Javascript
ArrayBuffer { [Uint8Contents ]: <00 00 00 00 00 00 00>, byteLength: 6 }
```

It’s possible to interpret these zeroes in a specific way. For example:

```Javascript
const a8 = new Uint8Array(a);
a8[0] = 45;
console.log(a);
```

Output:

```Javascript
ArrayBuffer { [Uint8Contents]: <2d 00 00 00 00 00>, byteLength: 6 }
```

Now, when the buffer is printed, it shows that part of the data has changed. The first byte is no longer 00 — it's 2d in hexadecimal, which equals 45 in decimal.


If this is done again:

```Javascript
a8[2] = 45;
console.log(a);
```

Now it shows:

```Javacript
ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 00 00>, byteLength: 6 }
```

This means the first byte is set, one byte is skipped, and then another byte is set.


Now the memory is viewed differently:

```javascript
const a16 = new Uint16Array(a)
```

This doesn’t change the actual memory, just how it is interpreted. It now treats every 2 bytes as a single unit.

At this point, nothing has changed in the memory, but if something is set in the Uint16Array:

```javascript
a16[2] = 0x45x45
console.log(a)
```

The output is: 

```javascript
ArrayBuffer { [Uint8Contents ]: <2d 00 2d 00 00 45 45>, byteLength: 6 }
```

So now it shows that even though index 2 of the Uint16Array was set, the bytes at the 5th and 6th positions in the memory were updated with 45 45.

This might seem confusing, but here’s what’s happening:

-  The same piece of memory is being interpreted in different ways.

- First, it was viewed as 8-bit (1 byte) units.

- Then, it was viewed as 16-bit (2 bytes) units.

So depending on the type of view used (Uint8Array or Uint16Array), the positions in memory being accessed are different.

## Key idea

An array is just a data structure that stores values in a row and can be walked through by position.

It’s important to understand this, because later in this course a different data structure will be introduced: the list. It’s important to remember that a list is not the same as an array.