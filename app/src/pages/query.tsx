// @flow
import * as React from 'react';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';
import { Box } from 'rebass';
import 'graphiql/graphiql.css';

import Layout from '../layout/Main';

function graphQLFetcher(graphQLParams) {
  return fetch(
    'https://fxsmbnrmrne23ogbuwtl2hsigq.appsync-api.us-east-1.amazonaws.com/graphql',
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'da2-4kczkhvhnrgdxjjpp5nab53eda',
      },
      body: JSON.stringify(graphQLParams),
    },
  ).then(response => response.json());
}

const GraphiQLUI = () => {
  return (
    <Layout maxWidth={2000}>
      <Box
        sx={{
          height: '30rem',
        }}
      >
        <GraphiQL fetcher={graphQLFetcher} style={{ minHeight: '30rem' }} />
      </Box>
    </Layout>
  );
};

export default GraphiQLUI;
