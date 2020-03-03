
const leftJoin = (tableA, tableB) => {
  const output = [];
  Object.keys(tableA).forEach(key => {
    const arr = [];
    arr.push(key, tableA[key]);
    if(tableB[key]){
      arr.push(tableB[key]);
    } else {
      arr.push(null);
    } output.push(arr);
  });
  return output;
};


const tableA = {'A': 'a','B':'b', 'C':'c'};
const tableB = {'A':'apple', 'B':'banana', 'D' : 'duck'};
console.log(typeof(leftJoin(tableA,tableB)));

module.exports = leftJoin;

