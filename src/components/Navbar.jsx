import Button from "./Button";
import Logo from "./Logo";
import ExternalLink from "./ExternalLink";
import { useState } from "react";
import { BsJustify, BsX } from "react-icons/bs";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="flex items-center justify-between px-8 pt-8">
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
        <Button label="Submit" className="hidden md:block" />
      </nav>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-5 px-8 py-4">
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
