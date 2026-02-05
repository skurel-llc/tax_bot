import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      {/* A global navbar could go here */}
      <main>
        <Outlet />
      </main>
      {/* A global footer could go here */}
    </div>
  );
};

export default Layout;
