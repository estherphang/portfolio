import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Components/Homepage/Main";
import AllCodingProjects from "./Components/CodePage/AllCodingProjects";
import IndividualCodProject from "./Components/CodePage/IndividualCodProject";

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
              path: `code`,
              children: [
                { index: true, element: <AllCodingProjects /> },
                { path: ":url", element: <IndividualCodProject /> },
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
