import React, { ReactElement } from 'react';
import { CssBaseline } from '@material-ui/core';

const index = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <CssBaseline />
      <div>
        <div>nav</div>
        <main>{children}</main>
        <div>footer</div>
      </div>
    </>
  );
};

export default index;
