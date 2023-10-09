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
    <header className="absolute top-0 left-0 w-full h-full overflow-hidden">
      {menuOpen ? (
        <div className="w-full h-full" onClick={() => toggleMenu()} />
      ) : null}
      <div className="absolute top-0 w-36 flex items-center justify-left left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 h-14 md:h-16">
        <Logo selected={props.selected} setSelected={props.setSelected} />
      </div>
      <nav
        id="nav"
        className="absolute top-0 flex justify-center items-center bg-background/95 md:bg-transparent right-0 md:right-auto flex-col md:flex-row w-5/6 md:w-full h-full md:h-16 rounded-l-2xl md:rounded-l-none translate-x-full md:translate-x-0 duration-300"
      >
        <div className="h-full flex justify-evenly items-center pb-48 md:pb-0 pt-14 md:pt-0 flex-col md:flex-row w-full md:w-1/4">
          <div className="h-12 w-full flex items-center justify-center">
            <NavBarItem
              input="About"
              selected={props.selected}
              index={1}
              onClick={() => handleClick(1)}
            />
          </div>
          <div className="h-12 w-full flex items-center justify-center">
            <NavBarItem
              input="Portfolio"
              selected={props.selected}
              index={2}
              onClick={() => handleClick(2)}
            />
          </div>
          <div className="h-12 w-full flex items-center justify-center">
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
        className="right-0 top-0 absolute md:hidden text-2xl p-3"
        onClick={() => toggleMenu()}
      >
        {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
      </div>
    </header>
  );
};

export default NavBar;
