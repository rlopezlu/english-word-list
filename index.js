var myArray = require('./arrayOfWords.js').myArray;

module.exports.minLength = function(minLength){
  return myArray.filter(word =>{
    return word.length >= minLength
  })
}

module.exports.maxLength = function(maxLength){
  return myArray.filter(word =>{
    return word.length <= maxLengthn
  })
}

module.exports.range = function(min, max){
  return myArray.filter(word => {
    return word.length >= min && word.length <= max
  })
}

module.exports.amount = function(count){
  return myArray.filter(word => {
    return word.length > 3
  }).splice(1, count)
}

module.exports.randomize = function(list){
  return list.sort( (a,b) =>{
    return 0.5 - Math.random()
  })
}
