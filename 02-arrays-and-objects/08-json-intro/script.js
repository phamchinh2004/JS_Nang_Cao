const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

// Convert to JSON string
const str = JSON.stringify(post);//chuyển đối tượng post thành một chuỗi JSON.

console.log(str.id);//để truy cập id từ chuỗi JSON thì phải dùng Parse như ở dòng 15
console.log(str);
console.log(str.title);

// Parse JSON - Phân tích cú pháp JSON
const obj = JSON.parse(str);
console.log(obj.id);

// JSON & arrays
const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
];

const str2 = JSON.stringify(posts);
console.log(str2);
const obj2=JSON.parse(str2);
console.log(obj2[0].body);