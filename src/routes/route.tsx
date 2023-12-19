/* eslint-disable react/no-array-index-key */
import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom"
import routeLink from './route-link';
import ProtectedRoute from '../shared/authguard.service';
import MainLayout from '../layout/MainLayout';
// ------------ render  ------------
const renderRoutes = (routes: any) =>
  <Suspense>
    <Routes>
      {routes.map((route: any, i: number) => {
        const guard = route.guard
        if (guard) {
          return <Route
            key={`router-guard-${i}`}
            path={route.path}
            element={<ProtectedRoute component={<MainLayout components={route.element}/>} />}
          />
        } else {
          return (
            <Route
              key={`router-guest-${i}`}
              path={route.path}
              element={route.element}
            />
          )
        }
      })}
    </Routes>
  </Suspense>
function Router() {
  return renderRoutes(routeLink);
}

export default Router;
