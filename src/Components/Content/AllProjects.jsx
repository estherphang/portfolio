import data from "/data/data.json";
import Card from "../StyleLibrary/Card";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { title2 } from "../StyleLibrary/ClassName";

export default function AllProjects() {
  const { categories } = useParams();

  const categoryContent = data.categories[categories];
  const allProjectsInCategory = categoryContent.projects;

  return (
    <>
      <div className="flex flex-col mt-4 md:grid md:grid-cols-3 md:gap-4">
        <div className="content-center col-span-2 mr-4">
          <div>{parse(categoryContent.content)}</div>
        </div>
        <div className="md:content-center">
          <img
            src={categoryContent.contentImage}
            className="object-contain m-4 mx-auto md:mx-0"
          />
        </div>
      </div>
      {/* <div className="mt-8"> {categoryContent.content}</div> */}
      <div className="text-pretty">
        <h2 className={`${title2} + mt-10`}>Selected Works</h2>
        {allProjectsInCategory.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            title={post.title}
            colour={post.colour}
            description={post.description}
            category={categories}
            url={post.url}
            image={post.image}
          />
        ))}
      </div>
    </>
  );
}
