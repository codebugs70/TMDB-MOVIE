import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
/* ====================================================== */
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <span className="loadingSpin"></span>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
