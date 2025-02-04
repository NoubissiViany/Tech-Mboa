import Loader from "@components/Loader";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  const Home = lazy(() => import("@pages/Home"));
  const NotFound = lazy(() => import("@pages/NotFound"));
  const ComingSoon = lazy(() => import("@pages/ComingSoon"));

  return (
    <Router>
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            <div className="flex flex-1 flex-col justify-center items-center">
              <Loader />
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
