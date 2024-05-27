import { useParams } from "react-router-dom";
import data from "/data/data.json";
import parse from "html-react-parser";
import {
  postTagline,
  title1,
  title2,
  hyperlink,
} from "../StyleLibrary/ClassName";

export default function IndividualProject() {
  const { url, categories } = useParams();

  const categoryContent = data.categories[categories];

  const projects = categoryContent.projects;

  const filteredData = projects.filter((post) => post.url === url);
  // console.log(filteredData);

  return (
    <div className="mt-8">
      <ul>
        {filteredData.map((post) => (
          <li key={post.id}>
            <div
              className={`${post.colour} rounded-2xl flex justify-center items-center `}
            >
              <img src={post.image} className="md:w-6/12" />
            </div>
            <h1 className={`${title1} + text-center`}>{post.title}</h1>
            <div className={`${postTagline}`}>{parse(post.description)}</div>
            <h2 className={`${title2}`}>What is {post.title}?</h2>
            <div> {parse(post.what)}</div>
            <div className={`${title2}`}>{post.whyTitle}</div>
            <div>{parse(post.why)}</div>
            <div className="flex justify-center items-center">
              {parse(post.subcontent1)}
            </div>
            <h2 className={`${title2} `}>My role in {post.title}:</h2>
            <div>{parse(post.role)}</div>
            <h2 className={`${title2} `}>{post.viewProjectTitle}</h2>
            <div>{parse(post.projectContent)}</div>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1 mt-8">
              {parse(post.subcontent2)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
