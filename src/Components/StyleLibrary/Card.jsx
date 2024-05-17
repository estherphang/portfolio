import { Link } from "react-router-dom";

export default function Card({
  title,
  description,
  colour,
  category,
  url,
  image,
}) {
  console.log("Colour:", colour);

  const bannerColour = `card lg:card-side ${colour} shadow-md mt-8 md:grid md:grid-cols-3 md:gap-4`;

  return (
    <>
      <Link to={`/portfolio/${category}/${url}`}>
        <div className={bannerColour}>
          <figure className="...">
            <img
              src={image}
              className="ml-8 mt-3 max-sm:-mt-2 max-sm:ml-0"
              alt="Album"
            />
          </figure>
          <div className="card-body justify-center col-span-2 ...">
            <div className="flex flex-col  ">
              <h2 className="card-title text-2xl font-normal max-sm:-mt-12">
                {title}
              </h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
