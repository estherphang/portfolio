import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Components/Homepage/Main";

import AllProjects from "./Components/Content/AllProjects";
import IndividualProject from "./Components/Content/IndividualProject";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
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
          path: `portfolio`,
          children: [
            {
              path: `:categories`,
              children: [
                { index: true, element: <AllProjects /> },
                { path: ":url", element: <IndividualProject /> },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="flex justify-center">
      <div className="mt-2 mx-2 w-full sm:w-10/12 md:w-10/12 lg:w-10/12 xl:w-10/12">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
