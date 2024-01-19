// If Statement Syntax
if (true) {
  console.log('This is true');
}

if (false) {
  console.log('This is NOT true');
}

// Evaluation expressions - Biểu thức đánh giá
const x = 10;
const y = 5;

if (x >= y) {
  console.log(`${x} is greater than or equal to ${y}`);//true
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is NOT equal to ${y}`);//true
}

// Block scope
if (x !== y) {
  const z = 20;
  console.log(`${z} is 20`);
}

console.log(z); // Throw error

// Shorthand If/Else - Viết tắt
if (x >= y)
  console.log(`${x} is greater than or equal to ${y}`),
    console.log('This is true');
else console.log('This is false');