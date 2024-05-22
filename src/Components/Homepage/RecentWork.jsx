import PostFetcher from "../Hooks/PostFetcher";
import Card from "../StyleLibrary/Card";
import data from "/data/data.json";

export default function RecentWork() {
  const codingPosts = PostFetcher(data, "code");

  // console.log(codingPosts);

  return (
    <>
      <div className="text-3xl mt-8 font-serif"> My Recent Work</div>
      {/* pass id, title, colour and tagline into card component */}
      {codingPosts.map((post, index) => (
        <Card
          key={post.id}
          id={post.id}
          title={post.title}
          // arrangement of blue, pink, purple
          colour={
            index === 0
              ? "bg-secondary"
              : index === 1
              ? "bg-accent"
              : "bg-purple"
          }
          image={post.image}
          description={post.description}
          category="code"
          url={post.url}
        />
      ))}
    </>
  );
}
