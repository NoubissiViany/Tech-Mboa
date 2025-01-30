import Button from "./Button";
import Logo from "./Logo";
import ExternalLink from "./ExternalLink";

function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between p-8">
        <div className="flex items-center gap-20">
          <Logo />
          <div className="flex gap-10">
            <ExternalLink label="Home" link="/" />
            <ExternalLink label="About" link="/about" />
            <ExternalLink label="Applications" link="/applications" />
            <ExternalLink label="Blog" link="/blog" />
          </div>
        </div>
        <Button label="Submit" />
      </nav>
    </header>
  );
}

export default Navbar;
