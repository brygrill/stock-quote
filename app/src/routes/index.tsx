import React from 'react';
import { Outlet, Link, useRoutes, useParams } from 'react-router-dom';

// https://github.com/ReactTraining/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md
// https://reacttraining.com/blog/react-router-v6-pre/#introducing-routes
const Home = () => <div>Home</div>;
function Quote() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Outlet />
    </div>
  );
}
const QuoteProfile = () => {
  const { symbol } = useParams();
  return <div>Quote for {symbol}</div>;
};

const Router = () => {
  const element = useRoutes([
    { path: '/', element: <Home /> },
    {
      path: 'quotes',
      element: <Quote />,
      children: [
        { path: '/', element: <div>index</div> },
        { path: ':symbol', element: <QuoteProfile /> },
        { path: 'me', element: <div>me</div> },
      ],
    },
    { path: '*', element: <div>404</div> },
  ]);

  return element;
};

export default Router;
