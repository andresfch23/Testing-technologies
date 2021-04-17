const fs = require('fs');

const readStream = fs.createReadStream('./texts/largeText.txt');
const writeStream = fs.createWriteStream('./texts/largeText2.txt')

// readStream.on('data', chunk => {
//     console.log('---------------- NEW CHUNK ----------------------');
//     console.log(chunk.toString());
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);