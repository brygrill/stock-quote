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

export const formatMktCap = cap => {
  return numeral(cap).format('($ 0.00 a)');
};
