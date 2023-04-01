import { Navigate, Outlet } from "react-router-dom";
import { Header } from "./components";
export default function PrivateRoute({ element: Component, ...rest }) {
  const isLoggedIn = localStorage.getItem("api_key");
  return isLoggedIn ? (
    <div className="private-route-wrapper">
      <Header />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
}
