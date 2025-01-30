import { lazy, Suspense } from "react";
import { Audio } from "react-loader-spinner";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  const Home = lazy(() => import("@pages/Home"));
  const NotFound = lazy(() => import("@pages/NotFound"));
  return (
    <Router>
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            <div className="flex flex-1 flex-col justify-center items-center">
              <Audio
                height="60"
                width="30"
                radius="9"
                color="teal"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
