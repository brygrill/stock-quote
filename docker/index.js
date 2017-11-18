/* eslint-disable no-console */
require('dotenv').config();
const axios = require('axios');
const algoliasearch = require('algoliasearch');

// init algolia
const CLIENT = algoliasearch(
  process.env.ALGOLIA_ID,
  process.env.ALGOLIA_API_KEY,
);
const INDEX = CLIENT.initIndex(process.env.ALGOLIA_INDEX);

// fetch symbols from iex
const iex = () => {
  return axios
    .get('https://api.iextrading.com/1.0/ref-data/symbols')
    .then(({ data }) => {
      return data;
    })
    .catch(err => {
      return err;
    });
};

// rm test symbols
const formatData = data => {
  return new Promise((resolve, reject) => {
    try {
      data.map((item, index) => {
        if (item.name === 'NASDAQ TEST STOCK') {
          data.splice(index, 1);
        }
        return item;
      });
      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
};

// clear current index
const clearIndex = () => {
  return new Promise((resolve, reject) => {
    INDEX.clearIndex(err => {
      if (err) {
        reject();
      } else {
        console.info('Cleared Index');
        resolve();
      }
    });
  });
};

// populate index
const updateIndex = objects => {
  return new Promise((resolve, reject) => {
    INDEX.addObjects(objects, (err, content) => {
      if (err) {
        reject(err);
      } else {
        console.info(`Added ${content.length} records to Index.`);
        resolve(content);
      }
    });
  });
};

// fetch data
// push to algolia
const processData = async () => {
  try {
    const data = await iex();
    const symbols = await formatData(data);
    await clearIndex();
    await updateIndex(symbols);
  } catch (err) {
    console.error(err);
  }
};

// execute script
processData();
