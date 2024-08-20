import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import LayoutOne from "./Layouts/LayoutOne";
import Home from "./Pages/HomePage";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Portfolios from "./Pages/Portfolios";
import Contact from "./Pages/Contact";
import HomePage from "./Pages/HomePage";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<HomePage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolios" element={<Portfolios />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
