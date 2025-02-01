import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="#">
          <img
            className=""
            src={headerLogo}
            alt="header-logo"
            width={130}
            height={29}
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                className="font-montserrat leading-normal text-lg text-slate-400"
                href={item.href}
              >
                
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <img src={hamburger} alt="hamburger-icon" className="w-5 h-5 hidden max-lg:block" />
      </nav>
    </header>
  );
};

export default Nav;
