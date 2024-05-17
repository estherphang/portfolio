import data from "/data/data.json";
import Card from "../StyleLibrary/Card";
import { useParams } from "react-router-dom";

export default function AllProjects() {
  const { categories } = useParams();

  const categoryContent = data.categories[categories];
  const allProjectsInCategory = categoryContent.projects;

  return (
    <>
      {/* <div className="mt-8"> {categoryContent.content}</div> */}
      <div className="">
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
