import numeral from 'numeral';

export const price = price => {
  return numeral(price).format('$0,0.00');
};

export const percent = percent => {
  return numeral(percent).format('+0.00%');
};

export const formatNumber = num => {
  return numeral(num).format('0.00a');
};

export const formatBigPrice = cap => {
  return numeral(cap).format('($0.00 a)');
};

export const formatBigPriceNoDecimal = cap => {
  return numeral(cap).format('($0a)');
};

export const color = num => {
  if (num > 0) {
    return 'green';
  } else if (num < 0) {
    return 'red';
  }
  return 'black';
};

export const calcPercCh = (close, last) => {
  const num = (last - close) / close;
  return { num, perc: percent(num), color: color(num) };
};
