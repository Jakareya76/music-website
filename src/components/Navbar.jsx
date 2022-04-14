import Button from "./shared/Button";
import Logo from "../assets/MuzicLogo.png";

const Navbar = () => {
  const NavLinks = ["Home", "About", "Preformer", "Event Shedule"];

  return (
    <header className="bg-[#081730] text-white flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
      <img src={Logo} alt="Logo" className="w-10 h-10" />
      <nav className="flex">
        <ul className="flex w-full justify-between">
          {NavLinks.map((curElem, index) => {
            return (
              <li className="mr-[3rem] hover:cursor-pointer" key={index}>
                {curElem}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex space-x-3">
        <Button styles="hover:bg-slate-700">Log In</Button>
        <Button styles="hover:bg-slate-700">Sign Up</Button>
      </div>
    </header>
  );
};

export default Navbar;
