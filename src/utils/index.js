import numeral from 'numeral';

export const formatPrice = price => {
  return numeral(price).format('$0,0.00');
};

export const formatPercent = percent => {
  return numeral(percent).format('0.00%');
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

export const calcPercCh = (close, last) => {
  return (last - close) / close;
};
