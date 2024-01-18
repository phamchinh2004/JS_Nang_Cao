function first() {
  const x = 100;
  function second() {
    const y = 200;
    console.log(x + y);
  }

  // console.log(y);Lỗi, vì y được khai báo trong hàm nên không thể gọi ở ngoài hàm

  second();
}

first();

if (true) {
  const x = 100;

  if (x === 100) {
    const y = 200;
    console.log(x + y);
  }

  console.log(y);//Lỗi, vì y được khai báo trong khối lệnh if nên không thể gọi ở ngoài khối if
}