const fs = require('fs');

const rs = fs.createReadStream('./02SART\FILES\lorem.txt', {encoding: 'utf8' });
const ws = fs.createWriteStream('./02SART\FILES\new-lorem.txt');
// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })
rs.pipe(ws);
