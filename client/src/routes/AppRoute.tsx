import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import SignIn from '@/pages/SignIn'
import { ROUTES } from '@/utils/routes'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const AppRoute = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback='loading'>
              <Home />
            </Suspense>
          }
        />
      </Route>
      <Route
        path={ROUTES.SIGNIN}
        element={
          <Suspense fallback='loading...'>
            <SignIn />
          </Suspense>
        }
      />
    </Routes>
  )
}

export default AppRoute
