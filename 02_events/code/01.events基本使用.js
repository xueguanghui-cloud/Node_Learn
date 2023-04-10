/** @format */

const EventEmitter = require('events');

// 创建 EventEmitter 实例
const emitter = new EventEmitter();

// 监听 'codexgh' 事件
emitter.on('codexgh', (args) => {
  console.log('监听到 codexgh 事件', args);
});

// 发射事件
setTimeout(() => {
  emitter.emit('codexgh', Math.random());
}, 2000);
