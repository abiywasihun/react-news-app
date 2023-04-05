import React, { lazy, Suspense } from "react"
import { Routes ,Route } from "react-router-dom"
import { PATH } from "../constants/paths"
import Loading from "../Components/Loading/Loading"
const Home = lazy(() => import("../Pages/Home/Home"))

export default function HomeRoutes() {
  return (
    <Routes>
      <Route
        path={PATH.HOME}
        Component={() => (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        )}
      />
    </Routes>
  )
}
