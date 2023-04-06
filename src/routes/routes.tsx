import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SearchRoutes from './SearchRoutes';
import LoginRoutes from './LoginRoutes';
import HomeRoutes from './HomeRoutes';
import SignUpRoutes from './SignUpRoutes';

export default function Routes() {
  return (
    <BrowserRouter>
      <HomeRoutes />
      <SearchRoutes />
      <LoginRoutes />
      <SignUpRoutes />
    </BrowserRouter>
  );
}
