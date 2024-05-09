import { useParams } from "react-router-dom";
import data from "/data/data.json";
import parse from "html-react-parser";

export default function IndividualProject() {
  const { url, categories } = useParams();

  const posts = data.categories[categories];
  // console.log(posts);

  const filteredData = posts.filter((item) => item.url === url);
  // console.log(filteredData);

  return (
    <div>
      indidivual page - {url}, {categories}
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            <div className={item.colour}>
              <img src="/self-cartoon.png" alt="cartoon" width="200px"></img>
            </div>
            {item.title}
            <div>What is {item.title}?</div>
            <div> {parse(item.what)}</div>
            <div>Why did I build {item.title}?</div>
            <div className="div">{parse(item.why)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
