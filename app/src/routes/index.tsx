import React, { lazy } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

import HomePage from './Home';
// import Quote from './Quote';
const Quote = lazy(() => import("./Quote"));

// https://github.com/ReactTraining/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md
// https://reacttraining.com/blog/react-router-v6-pre/#introducing-routes
const QuotePage = () => <Outlet />;

const Router = () => {
  const element = useRoutes([
    { path: '/', element: <HomePage /> },
    {
      path: 'quote',
      element: <QuotePage />,
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
