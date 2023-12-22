const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');
for (i = 0; i < 5; i++) {
    fs.writeFileSync(`${dirPath}/hello${i}.txt`, 'this is test data');
    fs.unlinkSync(`${dirPath}/hello${i}.txt`);
}

fs.readdir(dirPath, (err, files) => {
    files.forEach(element => {
        console.log(element);
    });
})