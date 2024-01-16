// Challenge 1

const arr = [1, 2, 3, 4, 5];

// arr.reverse();
// arr.push(0);
// arr.unshift(6);

// Same result as above
arr.push(6);//Thêm 6 vào mảng arr
arr.unshift(0);//Thêm 0 vào đầu mảng
arr.reverse();//Đảo ngược mảng
x=arr.map(String);//Chuyển mảng các số thành mảng chuỗi
console.log(arr);
console.log(x);

// Challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Solution 1
const arr3 = arr1.slice(0, 4).concat(arr2);

// Solution 2
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);

console.log(arr4);