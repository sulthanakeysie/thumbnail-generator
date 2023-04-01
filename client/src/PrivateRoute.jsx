import { Navigate, Outlet, Route } from "react-router-dom";
import { Header } from "./components";
export default function PrivateRoute({ element: Component, ...rest }) {
  const isLoggedIn = localStorage.getItem("api_key");
  return isLoggedIn ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
}
