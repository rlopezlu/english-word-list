var myArray = require('./arrayOfWords.js').myArray;

exports.minLength = function(minLength){
  return myArray.filter(word =>{
    return word.length >= minLength
  })
}

exports.maxLength = function(maxLength){
  return myArray.filter(word =>{
    return word.length <= maxLength
  })
}

exports.range = function(min, max){
  return myArray.filter(word => {
    return word.length >= min && word.length <= max
  })
}
