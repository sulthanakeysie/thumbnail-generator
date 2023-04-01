import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./PrivateRoute";
import {
  ImageList,
  Login,
  Signup,
  Thumbnails,
  UploadImage,
} from "./components";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Navigate to="/images" replace />} />
          <Route path="/images" element={<ImageList />} />
          <Route path="/images/:id" element={<Thumbnails />} />
          <Route path="/upload-image" element={<UploadImage />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
