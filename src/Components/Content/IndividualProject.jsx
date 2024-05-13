import { useParams } from "react-router-dom";
import data from "/data/data.json";
import parse from "html-react-parser";
import { title1, title2 } from "../StyleLibrary/ClassName";

export default function IndividualProject() {
  const { url, categories } = useParams();

  const posts = data.categories[categories];
  // console.log(posts);

  const filteredData = posts.filter((post) => post.url === url);
  // console.log(filteredData);

  return (
    <div className="mt-4">
      <ul>
        {filteredData.map((post) => (
          <li key={post.id}>
            <div
              className={`${post.colour} rounded-2xl flex justify-center items-center `}
            >
              <img src={post.image} className="md:w-6/12" />
            </div>
            <div className={`${title1} + flex justify-center`}>
              {post.title}
            </div>
            <div className={`${title2}`}>What is {post.title}?</div>
            <div className="text-base"> {parse(post.what)}</div>
            <div className={`${title2}`}>Why did I build {post.title}?</div>
            <div className="div">{parse(post.why)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
