import { useParams } from "react-router-dom";

import data from "../Data.jsx";
import Nav from "../components/Nav/Nav.jsx";

function Project() {
  let index;
  const { id } = useParams();
  if (id === "resmemory") {
    index = 0;
  } else if (id === "sansampet") {
    index = 1;
  }
  return (
    <div id="project">
      <Nav />
      <div>
        <h1>{data[index].title}</h1>
      </div>
    </div>
  );
}

export default Project;
