/** @format */

// 创建Buffer - 不推荐
const buffer = new Buffer('hello codexgh');
console.log(buffer); // <Buffer 68 65 6c 6c 6f 20 63 6f 64 65 78 67 68>

// 创建Buffer对象
const buffer2 = Buffer.from('world');
console.log(buffer2); // <Buffer 77 6f 72 6c 64>
console.log(buffer2.toString());

// 创建Buffer对象(字符串中文)
const buffer3 = Buffer.from('hello 你好啊');
console.log(buffer3); // <Buffer 68 65 6c 6c 6f 20 e4 bd a0 e5 a5 bd e5 95 8a>
console.log(buffer3.toString());
