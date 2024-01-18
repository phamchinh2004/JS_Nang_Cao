// Challenge 1
// function getCelsius(f) {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius;
// }

const getCelsius = (f) => ((f - 32) * 5) / 9;

console.log(`The temp is ${getCelsius(35)} \xB0C `); //mã Unicode \xB0C: °C

// Challenge 2
function minMax(arr) {
  const min = Math.min(...arr);//Dấu ... chỉ dùng khi đối số truyền vào là 1 mảng
  const max = Math.max(...arr);//Nếu là đối số riêng lẻ thì bỏ ...

  return {
    min,
    max,
  };
}

console.log(minMax([2, 31, 4, 5, 6]));

// Challenge 3
((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(20, 10);
