import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH } from '../constants/paths';
import Loading from '../Components/Loading/Loading';
const Login = lazy(() => import('../Pages/Login/Login'));

export default function LoginRoutes() {
  return (
    <Routes>
      <Route
        path={PATH.LOGIN}
        Component={() => (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        )}
      />
    </Routes>
  );
}
