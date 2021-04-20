const fs = require('fs');

// Reading a file
fs.readFile('notes.txt', (err, data) => {
    if (err) {
        console.log(err);
    }

    console.log(data.toString());
});

// // Writing a file
fs.writeFile('new-text.txt', 'Test different', () => {
    console.log('File written')
});

if (!fs.existsSync('./texts')) {
    fs.mkdir('./texts', (err) => {
        if (err) {
            console.log(err);
        }
    
        console.log('folder created');
    });
} else {
    fs.rmdir('./texts', (err) => {
        if (err) {
            console.log(err);
        }

        console.log('folder deleted')
    });
}

// delete files
if (fs.existsSync('./new-text.txt')) {
    fs.unlink('./new-text.txt', (err) => {
        if (err) {
            console.log(err);
        }

        console.log('File deleted');
    })
}