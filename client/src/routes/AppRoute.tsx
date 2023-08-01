import Layout from '@/Shared/Layout'
import Home from '@/pages/Home'
import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp'
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
      <Route
        path={ROUTES.SIGNUP}
        element={
          <Suspense fallback='loading...'>
            <SignUp />
          </Suspense>
        }
      />
    </Routes>
  )
}

export default AppRoute
