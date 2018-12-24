import _ from 'lodash';
import { price } from './format';

const setTitle = (symbol, quote) => {
  let title = '';
  if (symbol && quote) {
    title = `${_.toUpper(symbol)} - ${price(quote)}`;
  } else {
    title = 'Stock Quotes';
  }

  document.title = title;
  return title;
};

export default setTitle;
