import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Reminder from "./pages/Reminder.jsx";
import Archive from "./pages/Archive.jsx";
import Home from "./pages/Home.jsx";
import Trash from "./pages/Trash.jsx";
import Edit from "./pages/Edit.jsx";
import NotesProvider from "./context/Context.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="home" element={<Home />} />
      <Route path="" element={<Login />} />
      <Route path="reminder" element={<Reminder />} />
      <Route path="archive" element={<Archive />} />
      <Route path="trash" element={<Trash />} />
      <Route path="edit" element={<Edit />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
  </StrictMode>
);
