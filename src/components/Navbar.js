import { useState } from "react";
import profilepic from "../img/profilepic.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const navItems = ["Home", "About", "Portfolio", "Contact"];
  const URL = useLocation();
  const element = URL.pathname.split("/")[1];
  const [activeElement, setActiveElement] = useState(
    element === "" ? "Home" : element
  );

  const clickHandler = (e) => {
    const item = e.target.id;
    setActiveElement(item);
  };

  return (
    <nav>
      <div className="neu2">
        <div className="neu1">
          <img src={profilepic} className="profilepic" alt="Profile Pic"></img>
        </div>
        <h2>
          Lucas <mark>Ng</mark>
        </h2>
        <p>Technologist</p>
      </div>

      <ul className="nav-items">
        {navItems.map((element, idx) => (
          <Link
            key={idx}
            to={element === "Home" ? "/" : `/${element.toLowerCase()}`}
          >
            <li
              id={element}
              onClick={clickHandler}
              className={
                activeElement.toLowerCase() === element.toLowerCase()
                  ? "active"
                  : ""
              }
            >
              {element}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
