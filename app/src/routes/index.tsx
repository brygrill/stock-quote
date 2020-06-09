import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

import Home from './Home';
import LoginPage from './Login';
import SignupPage from './Signup';
import Quote from './Quote';

import SearchLayout from '../layouts/Search';

// https://github.com/ReactTraining/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md
// https://reacttraining.com/blog/react-router-v6-pre/#introducing-routes

const HomePage = () => (
  <SearchLayout>
    <Home />
  </SearchLayout>
);

const QuotePage = () => (
  <SearchLayout>
    <Outlet />
  </SearchLayout>
);

const Router = () => {
  const element = useRoutes([
    { path: '/', element: <HomePage /> },
    { path: 'login', element: <LoginPage /> },
    { path: 'signup', element: <SignupPage /> },
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
