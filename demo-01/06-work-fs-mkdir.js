const fs = require('fs')

const createFile = () => {
    try {
        fs.mkdir(new Date().toLocaleDateString(), err => {
            if (err) throw err
            console.log('创建成功了');
            fs.mkdir(`${new Date().toLocaleDateString()}/01-源代码`)
            fs.mkdir(`${new Date().toLocaleDateString()}/02-课堂笔记`)
            fs.mkdir(`${new Date().toLocaleDateString()}/03-视频`)
            fs.mkdir(`${new Date().toLocaleDateString()}/04-其他资料`)

        })
    } catch (error) {
        console.log(error);
    }

}

createFile()



