import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH } from '../constants/paths';
import Loading from '../Components/Loading/Loading';
const SignUp = lazy(() => import('../Pages/SignUp/SignUp'));

export default function SignUpRoutes() {
  return (
    <Routes>
      <Route
        path={PATH.SIGNUP}
        Component={() => (
          <Suspense fallback={<Loading />}>
            <SignUp />
          </Suspense>
        )}
      />
    </Routes>
  );
}
