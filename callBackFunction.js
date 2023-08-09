
const sub = (arr1, arr2) => {
  const sort1 = arr1.sort();
  const sort2 = arr2.sort();
  const joined = sort1.concat(sort2);
  const search=joined.filter(num=> num%2===0? num:'');
  return search;
  
  
};

const cal = (fn, a, b) => {
  return fn(a, b);
};
console.log(cal(sub, [2, 4, 3, 5], [7, 8, 9, 10]));
