import React, { useEffect } from "react";
import NavBarItem from "./NavBarItem";
import Logo from "./Logo";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const NavBar = (props: {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  useEffect(() => {
    const nav = document.getElementById("nav");
    if (nav) {
      if (menuOpen) {
        nav.classList.remove("translate-x-full");
      } else {
        nav.classList.add("translate-x-full");
      }
    }
  }, [menuOpen]);

  const toggleMenu = (state?: boolean) => {
    if (state != undefined) {
      setMenuOpen(state);
    } else {
      setMenuOpen(!menuOpen);
    }
  };

  const handleClick = (num: number) => {
    props.setSelected(num);
    toggleMenu(false);
  };

  return (
    <header
      id="header"
      className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
    >
      <div className="relative top-0 left-0 w-full h-16 pointer-events-auto">
        <nav
          id="nav"
          className="rounded-l-2xl absolute w-4/5 h-screen top-0 right-0 flex flex-col justify-center items-center duration-300 md:translate-x-0 md:w-full md:h-full md:rounded-none bg-background/95 md:bg-transparent z-[1]"
        >
          <div className="w-full h-2/3 flex flex-col justify-evenly items-center md:w-1/4 md:h-full md:flex-row">
            <div className="w-1/3 md:h-2/3">
              <NavBarItem
                input="About"
                selected={props.selected}
                index={1}
                onClick={() => handleClick(1)}
              />
            </div>
            <div className="w-1/3 md:mx-8 md:h-2/3">
              <NavBarItem
                input="Portfolio"
                selected={props.selected}
                index={2}
                onClick={() => handleClick(2)}
              />
            </div>
            <div className="w-1/3 md:h-2/3">
              <NavBarItem
                input="Contact"
                selected={props.selected}
                index={3}
                onClick={() => handleClick(3)}
              />
            </div>
          </div>
        </nav>
        <div
          className="absolute top-0 right-0 h-full w-max aspect-square flex items-center justify-center cursor-pointer text-2xl md:hidden z-[1]"
          onClick={() => toggleMenu()}
        >
          {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
        </div>
        <div className="absolute top-0 left-1/2 md:left-0 -translate-x-1/2 md:-translate-x-0 w-36 h-full md:z-[1]">
          <Logo selected={props.selected} setSelected={props.setSelected} />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
