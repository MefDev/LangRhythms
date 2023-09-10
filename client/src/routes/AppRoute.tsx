import Layout from '@/Shared/Layout'
import { ROUTES } from '@/utils/routes'
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const Blog = lazy(() => import('@/pages/Blog'));
const Post = lazy(() => import('@/pages/Blog/Post'));
const Home = lazy(() => import('@/pages/Home'));
const SignIn = lazy(() => import('@/pages/SignIn'));
const SignUp = lazy(() => import('@/pages/SignUp'));


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
        <Route
          path={ROUTES.BLOG}
          element={
            <Suspense fallback='loading'>
              <Blog />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.BLOG_POST}
          element={
            <Suspense>
              <Post />
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
