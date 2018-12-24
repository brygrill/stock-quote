const setTitle = (symbol, quote) => {
  let title = '';
  if (symbol && quote) {
    title = `${symbol} - ${quote}`;
  } else {
    title = 'Stock Quotes';
  }

  document.title = title;
  return title;
};

export default setTitle;
