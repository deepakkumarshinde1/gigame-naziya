import { memo } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
            <ul>
              <li>
                <NavLink to="/projects/1">Java project</NavLink>
              </li>
              <li>
                <NavLink to="/projects/2">MERN project</NavLink>
              </li>
              <li>
                <NavLink to="/projects/3">PHP project</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default memo(Header);
