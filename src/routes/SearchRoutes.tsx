import React, { lazy, Suspense } from "react"
import { Routes,Route } from "react-router-dom"
import { PATH } from "../constants/paths"
import Loading from "../Components/Loading/Loading"
const SearchItem = lazy(
  () => import("../Pages/Search/Search")
)
export default function SearchRoutes() {
  return (
    <Routes>
      <Route
        path={PATH.SEARCH}
        Component={() => (
          <Suspense fallback={<Loading />}>
            <SearchItem />
          </Suspense>
        )}
      />
    </Routes>
  )
}
