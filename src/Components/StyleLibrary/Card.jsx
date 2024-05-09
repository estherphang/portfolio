import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Card({ title, description, colour, category, url }) {
  console.log("Colour:", colour);

  const bannerColour = `card lg:card-side ${colour} shadow-md mt-8 md:grid md:grid-cols-3 md:gap-4`;

  return (
    <>
      <Link to={`/portfolio/${category}/${url}`}>
        <div className={bannerColour}>
          <figure className="...">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
              alt="Album"
            />
          </figure>
          <div className="card-body justify-center col-span-2 ...">
            <div className="flex flex-col  ">
              <h2 className="card-title text-2xl font-normal">{title}</h2>
              <p>{description}</p>
            </div>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </Link>
    </>
  );
}
