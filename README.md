# english-word-list
1000 most common english words.   
Returns as an array of strings.

Also on [NPM](https://www.npmjs.com/package/english-word-list)


Installation
```
$ npm install english-word-list
```

Usage
``` js
var wordList = require('english-word-list')

let myArray = wordList.amount(20)
//an array of 20 strings
let secondArray = wordList.range(3,5)
//an array where all the strings have between 3 and 5 characters
```

Return words with:
* minLength (x)
* maxLength (x)

Can also be between x and y characters
* range(x, y)

To request a certain amount of words:
* 
Coming soon:
* Shuffled (random) option
* More words
