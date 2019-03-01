// 执行文件操作


// ------ 实现文件写入操作 ------------

// 1. 加载文件模块. fs模块
const fs = require('fs')

const msg = 'hello world, 你好世界!'

console.log('000');

fs.writeFile('./hello.txt', msg, 'utf-8', err => { // 异步执行
    console.log('111');
    // 如果 err == null, 表示写入文件失败
    if (err) console.log(`写文件出错, 错误为: ${err}`);
    else console.log('写入成功');
})
console.log('222');

// ------ 实现文件读取操作 ------------

// 1. 加载文件模块. fs模块
const fs1 = require('fs')

fs1.readFile('./hello.txt', 'utf-8', (err, data) => {
    // 如果传了第二个参数--编码, 则data是一个字符串
    // 如果没传, data参数是一个buffer对象, 里面保存的是一个一个的字节(理解为字节数组)
    // buffer对象转换成字符串, 调用toString方法, 可以传编码, 不传默认为utf-8
    if (err) throw err
    console.log(typeof data);
    console.log(data.toString('utf-8'));

})