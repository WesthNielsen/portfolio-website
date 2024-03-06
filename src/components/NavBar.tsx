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
      className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"
    >
      <div className="pointer-events-auto relative left-0 top-0 h-16 w-full">
        <nav
          id="nav"
          className="absolute right-0 top-0 z-[1] flex h-screen w-4/5 flex-col items-center justify-center rounded-l-2xl bg-background/95 duration-300 md:mt-3 md:h-full md:w-full md:translate-x-0 md:rounded-none md:bg-transparent"
        >
          <div className="flex h-2/3 w-full flex-col items-center justify-evenly md:h-full md:w-1/4 md:flex-row min-w-fit">
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
          className="absolute right-0 top-0 z-[1] flex aspect-square h-full w-max cursor-pointer items-center justify-center text-2xl md:hidden"
          onClick={() => toggleMenu()}
        >
          {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
        </div>
        <div className="absolute left-1/2 top-0 h-full w-36 -translate-x-1/2 md:left-0 md:z-[1] md:mt-3 md:-translate-x-0">
          <Logo selected={props.selected} setSelected={props.setSelected} />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
