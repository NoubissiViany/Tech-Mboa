import ExternalLink from "./ExternalLink";
import Logo from "./Logo";
import Text from "./Text";

function Footer() {
  return (
    <div className="bg-primary-300 py-16 flex flex-col gap-10">
      <nav className="flex flex-col justify-center items-center gap-8">
        <Logo />
        <div className="flex gap-10">
          <ExternalLink label="Home" className="text-white" link="/" />
          <ExternalLink label="About" className="text-white" link="/about" />
          <ExternalLink
            label="Applications"
            className="text-white"
            link="/applications"
          />
          <ExternalLink label="Blog" className="text-white" link="/blog" />
        </div>
      </nav>
      <hr className="border-t-2" />
      <section className="flex justify-between px-8">
        <Text
          className="text-white"
          content="© 2025 Tech Mboa. All rights reserved."
        />
        <div className="flex gap-6">
          <ExternalLink
            label="Privacy Policy"
            className="text-white"
            link="/privacy-policy"
          />
          <ExternalLink
            label="Terms of Service"
            className="text-white"
            link="/term-of-service"
          />
        </div>
      </section>
    </div>
  );
}

export default Footer;
