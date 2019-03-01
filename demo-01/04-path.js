const path = require('path'),
    fs = require('fs')

fs.readFile(path.join(__dirname, 'hello.txt'), 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data);
})