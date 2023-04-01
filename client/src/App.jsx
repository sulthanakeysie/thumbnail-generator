import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        <Route path="/" element={<Signup />}></Route>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="images" element={<ImageList />} />
        <Route exact path="images/:id" element={<Thumbnails />} />
        <Route exact path="/upload-image" element={<UploadImage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
