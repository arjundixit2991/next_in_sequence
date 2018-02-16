# next_in_sequence

Generates next serial combination in any alphanumeric sequence.

## usage

## `next_in_sequence.generate()`

```javascript

const next_in_sequence = require('next_in_sequence');

console.log(next_in_sequence.generate('aaabb001')); 
// Output -> aaabb002

console.log(next_in_sequence.generate('aaabb0999')); 
// Output -> aaabb1999

console.log(next_in_sequence.generate('ada2zz99')); 
// Output -> ada3zz99

console.log(next_in_sequence.generate('08zz99zz99')); 
// Output -> 09zz99zz99

console.log(next_in_sequence.generate('adkzz99')); 
// Output -> adlzz99

console.log(next_in_sequence.generate('asas9z99')); 
// Output -> asat9z99

```
