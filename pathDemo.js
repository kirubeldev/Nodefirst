import path from 'path'

const filepath = './dir1/dir2/text.txt';


console.log(path.basename(filepath)); //will give us the base name of the text file. or the file name.
console.log(path.dirname(filepath)); //will give the file path
console.log(path.extname(filepath)); //will give us the extension of the file.
console.log(path.parse(filepath)); //will give all the info


