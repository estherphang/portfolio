import data from "/data/data.json";
import Card from "../StyleLibrary/Card";
import { useParams } from "react-router-dom";

export default function AllProjects() {
  const { categories } = useParams();

  const allPost = data.categories[categories];

  return (
    <>
      <div className="-mt-4">
        {allPost.map((post) => (
          <Card
            key={post.id}
            id={post.id}
            title={post.title}
            colour={post.colour}
            description={post.description}
            category="code"
            url={post.url}
            image={post.image}
          />
        ))}
      </div>
    </>
  );
}
