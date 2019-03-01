const fs = require('fs')

fs.mkdir('./test-mkdir', err => {
    if (err) {
        console.log('创建目录出错');
        console.log(err);
    } else {
        console.log('目录创建成');
    }
})

