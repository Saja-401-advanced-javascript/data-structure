'use strict ';

function repeatedWord (string) {
  let arr = string.split(' ');
  for(let i = 0; i < arr.length ; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] === arr[j]){
        return arr[i];
      }
    }
  }
  return false;
}

module.exports = repeatedWord;

// console.log( repeatedWord('Saja a Swalgah a'));
