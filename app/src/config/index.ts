const SANDBOX = true;

const apiBase = SANDBOX
  ? 'https://sandbox.iexapis.com/stable'
  : 'https://cloud.iexapis.com/stable';

const apiKey = SANDBOX ? process.env.REACT_APP_SANDBOX_IEX : process.env.REACT_APP_IEX;

const buildEndpoint = (route: string) =>
  `${apiBase}/${route}?token=${apiKey}`;

export const iex = {
  search(fragment: string) {
    return buildEndpoint(`search/${fragment}`);
  },
  quote(symbol: string): string {
    return buildEndpoint(`stock/${symbol}/quote`);
  },
};
