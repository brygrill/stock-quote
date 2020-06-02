import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

import Quote from './Quote';

// https://github.com/ReactTraining/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md
// https://reacttraining.com/blog/react-router-v6-pre/#introducing-routes
const Home = () => <div>Home</div>;
const Quotes = () => <Outlet />;

const Router = () => {
  const element = useRoutes([
    { path: '/', element: <Home /> },
    {
      path: 'quote',
      element: <Quotes />,
      children: [
        { path: '/', element: <div>Quote Home</div> },
        { path: ':symbol', element: <Quote /> },
      ],
    },
    { path: '*', element: <div>404</div> },
  ]);

  return element;
};

export default Router;
