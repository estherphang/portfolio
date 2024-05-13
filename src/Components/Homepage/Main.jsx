import RecentWork from "./RecentWork";
import "./homepage.css";
import { yellowBtn } from "../StyleLibrary/ClassName";

export default function Main() {
  return (
    <>
      <div className="flex flex-col mt-4 place-content-between md:flex-row">
        <div className="content-center">
          <div className="text-4xl mt-4 font-serif mb-2">
            {" "}
            Hello World! I am Esther.
          </div>
          <div className="text-5xl mb-2">
            I{" "}
            <a className="outlined-text hover-color hover-blue font-[800]">
              code
            </a>
            . I{" "}
            <a className="outlined-text hover-color hover-pink font-bold">
              market
            </a>
            . I{" "}
            <a className="outlined-text hover-color hover-purple font-bold">
              design
            </a>
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
          <button className={`${yellowBtn} + mt-2`}>LET'S COLLABORATE!</button>
        </div>
        <img
          src="./self-cartoon.png"
          className="md:mt-10 md:ml-20 md:mr-10 object-contain md:w-96 w-[70%] mx-auto mt-2"
        />
      </div>
      <RecentWork />
    </>
  );
}
