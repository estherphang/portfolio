import { Link } from "react-router-dom";
import PostFetcher from "./Components/Hooks/PostFetcher";
import data from "/data/data.json";
import { yellowBtn } from "./Components/StyleLibrary/ClassName";

export default function Header() {
  const codingPosts = PostFetcher(data, "code");
  const marketingPosts = PostFetcher(data, "marketing");
  const designPosts = PostFetcher(data, "design");

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to="/portfolio">
            <img
              src="https://raw.githubusercontent.com/estherphang/portfolio/main/public/header-logo.png"
              alt="logo"
              className="-ml-4 md:w-52 w-[85%]"
            ></img>
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-2">
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex="0"
                  role="button"
                  className="m-4 hover:text-primary font-serif text-base"
                >
                  <Link to="/portfolio/code"> CODE </Link>
                </div>
                <ul
                  tabIndex="0"
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {codingPosts.map((post) => (
                    <li key={post.id}>
                      <Link
                        to={`/portfolio/code/${post.url}`}
                        className="hover:bg-secondary"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex="0"
                  role="button"
                  className="m-4 hover:text-primary font-serif text-base"
                >
                  <Link to="/portfolio/marketing">MARKETING</Link>
                </div>
                <ul
                  tabIndex="0"
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {marketingPosts.map((post) => (
                    <li key={post.id}>
                      <Link
                        to={`/portfolio/marketing/${post.url}`}
                        className="hover:bg-accent"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex="0"
                  role="button"
                  className="m-4 hover:text-primary font-serif text-base"
                >
                  <Link to="/portfolio/design">DESIGN</Link>
                </div>
                <ul
                  tabIndex="0"
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {designPosts.map((post) => (
                    <li key={post.id}>
                      <Link
                        to={`/portfolio/design/${post.url}`}
                        className="hover:bg-purple"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="m-4 hover:text-primary font-serif text-base">
                <Link to="/portfolio/about">ABOUT</Link>
              </div>

              {/* <li>
                <a>Item 3</a>
              </li> */}
            </ul>
          </div>
          <Link to="https://estherphang.com/contact" className={`${yellowBtn}`}>
            CONTACT
          </Link>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 overflow-hidden"
            >
              <li>
                <Link to="/portfolio/code" className="font-serif">
                  CODE
                </Link>
                <ul className="p-2 bg-base-200 rounded-box">
                  {codingPosts.map((post) => (
                    <li key={post.id}>
                      <Link
                        to={`/portfolio/code/${post.url}`}
                        className="hover:bg-secondary block truncate"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link to="/portfolio/marketing" className="font-serif">
                  MARKETING
                </Link>
                <ul className="p-2">
                  {marketingPosts.map((post) => (
                    <li key={post.id}>
                      <Link
                        to={`/portfolio/marketing/${post.url}`}
                        className="hover:bg-accent"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link to="/portfolio/design" className="font-serif">
                  DESIGN
                </Link>
                <ul className="p-2">
                  {designPosts.map((post) => (
                    <li key={post.id}>
                      <Link
                        to={`/portfolio/design/${post.url}`}
                        className="hover:bg-purple"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link to="https://estherphang.com/about" className="font-serif">
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
