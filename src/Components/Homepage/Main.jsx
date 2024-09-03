import RecentWork from "./RecentWork";
import "/src/Components/Homepage/homepage.css";
import { yellowBtn } from "../StyleLibrary/ClassName";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div className="flex flex-col mt-4 md:grid md:grid-cols-3 md:gap-4 ">
        <div className="content-center col-span-2 mr-4">
          <div className="text-4xl mt-4 font-serif mb-2">
            {" "}
            Hello World! I am Esther.
          </div>
          <div className="text-5xl mb-2">
            I{" "}
            <Link to="/portfolio/marketing">
              <a className="outlined-text hover-color hover-blue font-bold">
                market
              </a>
            </Link>
            . I{" "}
            <Link to="/portfolio/design">
              <a className="outlined-text hover-color hover-pink font-bold">
                design
              </a>
            </Link>
            . I{" "}
            <Link to="/portfolio/code">
              <a className="outlined-text hover-color hover-purple font-[800]">
                code
              </a>
            </Link>
            .
          </div>
          <p className="-mb-2 text-pretty">
            I'm a creator at heart with diverse experience in marketing and
            design, and I have recently started exploring coding. My journey has
            led me to understand the seamless integration of technology and
            design, positioning me to excel in product management or advanced
            marketing roles. Join me as I continue to explore the endless
            possibilities of merging these fields to create impactful and
            memorable experiences.
          </p>
          <p className="text-pretty">
            If you're interested in collaborating or discussing potential
            opportunities, feel free to reach out.
          </p>
          <div className="flex justify-center items-center mb-2 md:justify-start">
            <Link to="https://estherphang.com/contact">
              <button className={`${yellowBtn}`}>LET'S COLLABORATE!</button>
            </Link>
          </div>
        </div>
        <div className="content-center">
          <img
            src="https://raw.githubusercontent.com/estherphang/portfolio/main/public/self-cartoon.png"
            className="object-contain"
          />
        </div>
      </div>
      <RecentWork />
    </>
  );
}
