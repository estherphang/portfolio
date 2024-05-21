import RecentWork from "./RecentWork";
import "./homepage.css";
import { yellowBtn } from "../StyleLibrary/ClassName";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div className="flex flex-col mt-4 md:grid md:grid-cols-3 md:gap-4 ">
        <div className="content-center col-span-2">
          <div className="text-4xl mt-4 font-serif mb-2">
            {" "}
            Hello World! I am Esther.
          </div>
          <div className="text-5xl mb-2">
            I{" "}
            <Link to="/portfolio/code">
              <a className="outlined-text hover-color hover-blue font-[800]">
                code
              </a>
            </Link>
            . I{" "}
            <Link to="/portfolio/marketing">
              <a className="outlined-text hover-color hover-pink font-bold">
                market
              </a>
            </Link>
            . I{" "}
            <Link to="/portfolio/design">
              <a className="outlined-text hover-color hover-purple font-bold">
                design
              </a>
            </Link>
            .
          </div>
          <p className="mb-2">
            I'm a creator at heart. From dawn till dusk, I'm immersed in the
            world of code, marketing strategies, and innovative design. By day,
            I engineer elegant solutions through code, while by night, I unleash
            captivating ideas and designs that are both relatable and
            unforgettable. Join me on an exhilarating journey where creativity
            knows no bounds. Let's explore the endless possibilities of merging
            technology and design to craft experiences that resonate deeply.
            Step into my world, where I code, market, and design, weaving a
            seamless tapestry of innovation and artistry. Your adventure begins
            here!
          </p>
          <div className="flex justify-center items-center mb-2 md:justify-start">
            <Link to="/contact">
              <button className={`${yellowBtn}`}>LET'S COLLABORATE!</button>
            </Link>
          </div>
        </div>
        <div className="content-center">
          <img
            src="https://raw.githubusercontent.com/estherphang/portfolio/main/public/self-cartoon.png"
            className="object-contain m-4"
          />
        </div>
      </div>
      <RecentWork />
    </>
  );
}
