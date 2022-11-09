const numOfArray = {
  arr1: [89, 12, 44, 54, 76, 23, 45, 11, 9, 53, 24, 65, 82, 47, 1],
  arr2: [45, 11, 9, 53, 24, 65, 82, 47, 1],
};
const shortarray = numOfArray.arr2.sort((a, b) => a - b);
console.log(shortarray);
