import { Link, useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div>
      Home <Link to="/projects">Projects</Link>
      <button onClick={() => navigate("/about")}>About</button>
    </div>
  );
}

export default Home;
