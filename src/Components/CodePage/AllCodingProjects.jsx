import data from "/data/data.json";
import Card from "../StyleLibrary/Card";

export default function AllCodingProjects() {
  const allCodingPost = data.categories.code;

  return (
    <>
      {allCodingPost.map((post) => (
        <Card
          key={post.id}
          id={post.id}
          title={post.title}
          colour="secondary"
          description={post.description}
          category="code"
          url={post.url}
        />
      ))}
    </>
  );
}
