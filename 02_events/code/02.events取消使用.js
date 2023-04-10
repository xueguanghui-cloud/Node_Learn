/** @format */

const EventEmitter = require('events');

// 创建 EventEmitter 实例
const emitter = new EventEmitter();

// 监听 'codexgh' 事件
const handleCodexghFun = (args) => {
  console.log('监听到 codexgh 事件', args);
};

emitter.on('codexgh', handleCodexghFun);

// 发射事件
setTimeout(() => {
  emitter.emit('codexgh', Math.random());

  // 取消事件监听
  setTimeout(() => {
    emitter.off('codexgh', handleCodexghFun);
  }, 1000);
}, 2000);
