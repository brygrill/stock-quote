require('dotenv').config();
const csv = require('csvtojson');
const Client = require('ftp');
const fs = require('fs');
const algoliasearch = require('algoliasearch');

// init algolia
const CLIENT = algoliasearch(
  process.env.ALGOLIA_ID,
  process.env.ALGOLIA_API_KEY,
);
const INDEX = CLIENT.initIndex(process.env.ALGOLIA_INDEX);

// constants for Nasdaq ftp data
const NAS_HOST = 'ftp.nasdaqtrader.com';
const NAS_DIR = 'SymbolDirectory';
const NAS = 'nasdaqlisted';
const OTH = 'otherlisted';

// constants for saving data to file
const DATA = []; // in memory array to collect data during conversion
const DATA_DIR = 'data';
const OUT = `./${DATA_DIR}/listed.json`;

// Get data from ftp and save to local file
const fetchFTP = filename => {
  return new Promise((resolve, reject) => {
    const c = new Client();
    c.on('ready', () => {
      c.get(`${NAS_DIR}/${filename}.txt`, (err, stream) => {
        if (err) {
          reject(err);
        }
        stream.once('close', () => {
          c.end();
          resolve();
        });
        stream.pipe(fs.createWriteStream(`./${DATA_DIR}/${filename}.txt`));
      });
    });
    c.connect({ host: NAS_HOST });
  });
};

const cleanTextData = filename => {
  const file = `./${DATA_DIR}/${filename}.txt`;
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      const result = data.replace(/ACT Symbol/g, 'Symbol');

      fs.writeFile(file, result, 'utf8', error => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  });
};

// convert txt file to json
const csvToJson = filename => {
  const converter = csv({
    delimiter: ['|'],
  });

  return new Promise((resolve, reject) => {
    converter
      .fromFile(`./${DATA_DIR}/${filename}.txt`)
      .on('json', jsonObj => {
        DATA.push(jsonObj);
      })
      .on('done', err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
  });
};

const cleanJsonData = () => {
  return new Promise((resolve, reject) => {
    try {
      // rm this entry since its not a symbol
      DATA.map((item, index) => {
        if (item.Symbol.startsWith('File Creation Time')) {
          DATA.splice(index, 1);
        }
      });
      // sort a-z
      DATA.sort((a, b) => {
        const symbolA = a.Symbol;
        const symbolB = b.Symbol;
        if (symbolA < symbolB) {
          return -1;
        }
        if (symbolA > symbolB) {
          return 1;
        }
        return 0;
      });
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

const saveJsonToDisk = out => {
  return new Promise((resolve, reject) => {
    fs.writeFile(out, JSON.stringify(DATA, null, 2), 'utf-8', err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

const clearIndex = () => {
  return new Promise((resolve, reject) => {
    INDEX.clearIndex(err => {
      if (err) {
        reject();
      } else {
        resolve();
      }
    });
  });
};

const updateIndex = data => {
  const objects = require(data); // eslint-disable-line global-require
  return new Promise((resolve, reject) => {
    INDEX.addObjects(objects, (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
};

// fetch data
// convert it
// save to json
// push to algolia
const processData = async () => {
  try {
    await fetchFTP(NAS);
    await fetchFTP(OTH);
    await cleanTextData(OTH);
    await csvToJson(NAS);
    await csvToJson(OTH);
    await cleanJsonData();
    await saveJsonToDisk(OUT);
    await clearIndex();
    await updateIndex(OUT);
  } catch (err) {
    console.error(err);
  }
};

// execute script
processData();
