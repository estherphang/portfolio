import { Link } from "react-router-dom";
import PostFetcher from "./Components/Hooks/PostFetcher";
import data from "/data/data.json";

export default function Header() {
  const codingPosts = PostFetcher(data, "code");

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to="/">
            <img
              src="./header-logo.png"
              alt="logo"
              width="200px"
              className="-ml-2"
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
                      <a
                        href={`/portfolio/code/${post.url}`}
                        className="hover:bg-secondary"
                      >
                        {post.title}
                      </a>
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
                  MARKETING / UX
                </div>
                <ul
                  tabIndex="0"
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="hover:bg-accent">Panda Saves Money</a>
                  </li>
                  <li>
                    <a className="hover:bg-accent">SMU SOL 10th Anniversary</a>
                  </li>
                  <li>
                    <a className="hover:bg-accent">Kopi Cafe</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-hover">
                <div
                  tabIndex="0"
                  role="button"
                  className="m-4 hover:text-primary font-serif text-base"
                >
                  DESIGN
                </div>
                <ul
                  tabIndex="0"
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="hover:bg-secondary">SSEAYP 2015</a>
                  </li>
                  <li>
                    <a className="hover:bg-accent">SMU SOE Newsletter</a>
                  </li>
                  <li>
                    <a className="hover:bg-accent">Pet Portraits</a>
                  </li>
                </ul>
              </div>
              {/* <li>
                  <a>Item 1</a>
                </li>

                <li>
                  <a>Item 3</a>
                </li> */}
            </ul>
          </div>
          <Link
            to="/contact"
            className="btn btn-primary text-base font-serif font-normal tracking-wide"
          >
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="font-serif">CODE</a>
                <ul className="p-2">
                  {codingPosts.map((post) => (
                    <li key={post.id}>
                      <a className="hover:bg-secondary">{post.title}</a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <a className="font-serif">MAREKTING / UX</a>
                <ul className="p-2">
                  <li>
                    <a>Panda Saves Money</a>
                  </li>
                  <li>
                    <a>SMU SOL 10th Anniversary</a>
                  </li>
                  <li>
                    <a>Kopi Cafe</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="font-serif">DESIGN</a>
                <ul className="p-2">
                  <li>
                    <a>SSEAYP 2015</a>
                  </li>
                  <li>
                    <a>SMU SOE Newsletter</a>
                  </li>
                  <li>
                    <a>Pet Portraits</a>
                  </li>
                </ul>
              </li>
              {/* <li>
                  <a>Item 3</a>
                </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
