import {
  createBrowserRouter,
  createHashRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Contact from "./Contact/Contact";
import Profile from "./Components/Profile";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Components/Homepage/Main";

import AllProjects from "./Components/Content/AllProjects";
import IndividualProject from "./Components/Content/IndividualProject";
import About from "./Components/About";
import RedirectHandler from "./Components/Hooks/RedirectHandler";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/portfolio",
      element: (
        <>
          <RedirectHandler />
          <Header />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        { index: true, element: <Main /> },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: `:categories`,
          children: [
            { index: true, element: <AllProjects /> },
            { path: ":url", element: <IndividualProject /> },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="flex justify-center max-sm:m-4">
      <div className="mt-2 mx-2 w-full sm:w-10/12 md:w-10/12 lg:w-10/12 xl:w-10/12 ">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
