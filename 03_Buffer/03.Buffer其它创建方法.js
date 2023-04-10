/** @format */

// 使用 alloc方法 创建一个Buffer对象,8个字节大小内存空间
const buffer = Buffer.alloc(8);
console.log(buffer);

buffer[0] = 100;
buffer[3] = 99;

console.log(buffer); // <Buffer 64 00 00 63 00 00 00 00>
console.log(buffer.toString()); // dc
