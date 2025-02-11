import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1 className="header">
        <Link to="/songs">Music App</Link>
      </h1>
      <button>
        <Link to="/songs/new">New Song</Link>
      </button>
    </nav>
  );
}
