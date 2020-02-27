

class Hashmap {
  constructor(size){
    this.arr = new Array(size);
    this.size = size;
  }

  hash(key){
    // console.log('kkkkk',);

    return  key.split('').reduce((acc, val) => {
      return acc + val.charCodeAt(0);
    }, 0) * 19 % this.size;
  }

  add(key, val){
    let index = this.hash(key);
    console.log('kkkkkkk', index);


    if(!this.arr[index]){
      this.arr[index] = [];
    }

    this.arr[index].push([key,val]);
    return index;
  }

  get(key){
    const hashed = this.hash(key);
    const arr2 = this.arr[hashed];
    if(arr2 === null || arr2 === undefined){
      return null;
    }

    for(let i = 0; i < arr2.length; i++){
      if(arr2[i][0] === key){
        return arr2[i][1];
      }
    }
    return null;
  }

  contains(key){
    const hashed = this.hash(key);
    const arr2 = this.arr[hashed];
    if(arr2 === null || arr2 === undefined){
      return false;
    }

    for(let i = 0; i < arr2.length; i++){
      if(arr2[i][0] === key){
        return true;
      }

    }
    return false;
  }


  // hash(){

  // }
}
// let saja = new Hashmap(1024);
// saja.add('one', 'ffff');
// console.log('ssssssssssss', saja.contains('one'));

module.exports = Hashmap;