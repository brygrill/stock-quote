const request = require('request');
const csv = require('csvtojson');
const Client = require('ftp');
const fs = require('fs');

// const c = new Client();
// c.on('ready', function() {
//   c.get('SymbolDirectory/nasdaqlisted.txt', function(err, stream) {
//     if (err) throw err;
//     stream.once('close', function() {
//       c.end();
//     });
//     stream.pipe(fs.createWriteStream('foo.local-copy.txt'));
//   });
// });
// // connect to localhost:21 as anonymous
// c.connect({ host: 'ftp.nasdaqtrader.com' });

const converter = csv({
  delimiter: ['|'],
});

converter.fromFile('foo.local-copy.txt')
  .on('json', jsonObj => {
    // combine csv header row and csv line to a json object
    // jsonObj.a ==> 1 or 4
    console.log(jsonObj['Financial Status']);
  })
  // .on('csv', csvRow => {
  //   console.log(csvRow);
  //   // csvRow is an array
  // })
  .on('done', error => {
    console.log(error);
    console.log('end');
  });
