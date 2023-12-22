const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');

const filename = `${dirPath}/hello.txt`;

//create file
fs.writeFileSync(filename, 'this is dummy text');

//read file
fs.readFile(filename, 'utf-8', (err, item) => {
    console.log(item);
});

//update file
fs.appendFile(filename, 'add new text', (err)=>{
    if(!err){
        console.log('updated successfully');
    }
});

//rename file
fs.rename(filename, `${dirPath}/new.txt`, (err) => {
    if (!err) {
        console.log('file rename successfully');
    }
});

//delete file
fs.unlinkSync(filename);