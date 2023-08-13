import { useEffect, useState } from "react";
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";

import "./Navbar.css";

const Navbar = () => {
  const [navColor, setNavColor] = useState(false);

  // window.addEventListener("scroll", () => {
  //   if (window.scrollY > 125) {
  //     setNavColor(true);
  //   } else setNavColor(false);
  // });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 125) {
        setNavColor(true);
      } else setNavColor(false);
    });
  }, []);

  return (
    <div className={`nav ${navColor && "nav__black"}`}>
      <div className="left-navbar">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix logo"
        />
      </div>

      <div className="right-navbar">
        <MagnifyingGlassIcon className="icons" />
        <BellIcon className="icons" />

        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt="Netflix logo"
        />
      </div>
    </div>
  );
};
export default Navbar;
