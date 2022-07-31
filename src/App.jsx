import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "@components";

const Home = lazy(() => import("@pages/Home"));
// const Auth = lazy(() => import("@pages/Auth"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={(
              <Suspense>
                <Home />
              </Suspense>
            )}
          />
          {/* <Route
            path="auth/:type"
            element={(
              <Suspense fallback={<LoaderPage />}>
                <Auth />
              </Suspense>
            )}
          /> */}
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
