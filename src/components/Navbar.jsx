import Button from "./Button";
import Logo from "./Logo";
import ExternalLink from "./ExternalLink";
import { useState } from "react";
import { BsJustify, BsX } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="flex items-center justify-between px-8 py-4 max-[425px]:px-4">
        <div className="flex items-center gap-20">
          <Logo />
          <div className="hidden md:flex gap-10">
            <ExternalLink label="Home" link="/" />
            <ExternalLink label="About" link="/about" />
            <ExternalLink label="Applications" link="/applications" />
            <ExternalLink label="Blog" link="/blog" />
          </div>
        </div>
        {isMenuOpen ? (
          <BsX size={30} className="md:hidden" onClick={toggleMenu} />
        ) : (
          <BsJustify size={25} className="md:hidden" onClick={toggleMenu} />
        )}
        <Link to="/sign-up" className="hidden md:block">
          <Button label="Start" />
        </Link>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-5 px-8 py-2">
          <ExternalLink label="Home" link="/" />
          <ExternalLink label="About" link="/about" />
          <ExternalLink label="Applications" link="/applications" />
          <ExternalLink label="Blog" link="/blog" />
        </div>
      )}
    </header>
  );
}

export default Navbar;
