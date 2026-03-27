import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { protectedRoutes, publicRoutes } from "./configs/routes-config";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Replace with your actual auth logic
  // const isAuthenticated = !!localStorage.getItem("token");
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      {publicRoutes.map(({ key, path, component: Component }) => (
        <Route
          key={key}
          path={path}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Component />
            </Suspense>
          }
        />
      ))}

      {/* Protected Routes */}
      {protectedRoutes.map(({ key, path, component: Component }) => (
        <Route
          key={key}
          path={path}
          element={
            <PrivateRoute>
              <Suspense fallback={<div>Loading...</div>}>
                <Component />
              </Suspense>
            </PrivateRoute>
          }
        />
      ))}

      {/* Redirect unknown paths */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
