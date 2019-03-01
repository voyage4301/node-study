const fs = require('fs')


// 此处的 ./, 相对的是执行时的文件夹, 在哪儿执行就在哪里找 hello.txt
/* fs.readFile('./hello.txt', 'utf-8', (err, data) => {
    if (err) throw err

    console.log(data);
}) */

// 解决在文件中读取 ./ 相对路径的问题

// 解决: __dirname __filename

// __dirname: 表示 当前正在执行的js文件所在的目录
// __filename: 表示 当前正在执行的js文件的完整路径

// console.log(__dirname);
// console.log(__filename);

let filename = __dirname + '\\' + 'hello.txt'
fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) throw err

    console.log(data);
})
