import { useState } from "react";
import Button from "./shared/Button";
import Logo from "../assets/MuzicLogo.png";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const NavLinks = ["Home", "About", "Preformer", "Event Shedule"];

  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="bg-[#081730] text-white flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem] pb-5">
      <img src={Logo} alt="Logo" className="w-10 h-10" />
      <nav className="flex duration-500">
        <ul
          className={`flex lg:flex-row absolute lg:relative bg-[#0a0e36] flex-col z-50 items-center lg:w-full justify-center top-[100px] w-full h-80 lg:h-0 lg:top-0 lg:justify-between 
         lg:left-0 ${showMobileMenu ? "left-0" : "left-[-300%]"} duration-500 `}
        >
          {NavLinks.map((curElem, index) => {
            return (
              <li
                className="mr-[3rem] hover:cursor-pointer py-3 lg:py-0 text-lg lg:text-sm"
                key={index}
              >
                {curElem}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="lg:flex space-x-3 hidden ">
        <Button styles="hover:bg-slate-700">Log In</Button>
        <Button styles="hover:bg-slate-700">Sign Up</Button>
      </div>
      <div className="lg:hidden text-2xl">
        <i class="fa-solid fa-bars" onClick={handleMobileMenu}></i>
      </div>
    </header>
  );
};

export default Navbar;
