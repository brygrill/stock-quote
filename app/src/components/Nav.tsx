import * as React from 'react';
import { Link } from 'gatsby';

const Nav = ({ items }: { items: { title: string; href: string }[] }) => {
  return (
    <>
      {items.map(i => {
        return (
          <Link key={i.title} to={i.href} className="nav-item">
            {i.title}
          </Link>
        );
      })}
    </>
  );
};

export default Nav;
