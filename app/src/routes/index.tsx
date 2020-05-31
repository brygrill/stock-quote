import React from 'react';
import { BrowserRouter, Link, Outlet, useRoutes } from 'react-router-dom';

// https://github.com/ReactTraining/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md
// https://reacttraining.com/blog/react-router-v6-pre/#introducing-routes
const Home = () => <div>Home</div>;
const Quote = () => <div>Quote</div>;
const QuoteProfile = () => <div>Quote Profile</div>;

const Router = () => {
  const element = useRoutes([
    // A route object has the same properties as a <Route>
    // element. The `children` is just an array of child routes.
    { path: '/', element: <Home /> },
    {
      path: 'quotes',
      element: <Quote />,
      children: [
        // { path: '/', element: <UsersIndex /> },
        { path: ':id', element: <QuoteProfile /> },
        // { path: 'me', element: <OwnUserProfile /> },
      ],
    },
  ]);

  return element;
};

export default Router;
