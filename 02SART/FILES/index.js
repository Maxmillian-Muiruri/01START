const fsPromises = require('fs').promises;
const path = require('path');
const fileOps = async ( ) => {
try {
    const data = await fsPromises.readFile(path.join(__dirname, 'starter.txt'), 'utf8');
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, 'starter.txt'));
    await fsPromises.writeFile(path.join(__dirname, 'promiseWrite.txt'), data);
    await fsPromises.appendFile(path.join(__dirname, 'promiseWrite.txt'),'\n\nice to meet you.');
    await fsPromises.rename(path.join(__dirname, 'promiseWrite.txt'),path.join(__dirname, 'promiseComplete.txt'));
    const newData = await fsPromises.readFile(path.join(__dirname, 'starter.txt'), 'utf8');
    console.log(newData);
} catch (err) {
  console.error(err) ;
}

}
fileOps();

// fs.readFile(path.join(__dirname, 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// console.log("Hello...");
// fs.writeFile(path.join(__dirname, 'reply.txt'), 'nice to meet you', (err, data) => {
//     if (err) throw err;
//     console.log('write complete');
//     fs.appendFile(path.join(__dirname, 'reply.txt'), '\n\nyes it is .....', (err, data) => {
//         if (err) throw err;
//         console.log('append complete');
//     });
//      fs.rename(path.join(__dirname, 'reply.txt'),path.join(__dirname, 'newreply.txt') , (err, data) => {
//         if (err) throw err;
//         console.log('rename complete');
//     })
// });


// process.on("uncaughtException", err => {
//     console.error(`There was an uncaught error: ${err}`);
//     process.exit(1);
// });
