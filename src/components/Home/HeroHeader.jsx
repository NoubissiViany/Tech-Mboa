import Button from "@components/Button";
import Text from "@components/Text";
import heroImg from "../../assets/images/home/heroImg.png";
import { Link } from "react-router-dom";

function HeroHeader() {
  return (
    <>
      <section className="flex flex-col gap-8">
        <div className="flex gap-20 max-[425px]:flex-col max-[425px]:gap-4">
          <Text
            type="h1"
            content="Discover and Share Cameroonian Innovations Today"
            className="w-full max-[425px]:text-center"
          />
          <div className="flex flex-col gap-4">
            <Text
              className="w-full max-[425px]:text-justify"
              content="Welcome to our platform, where Cameroonian developers can showcase their applications and users can explore, rate, and engage with local innovations. Join us in promoting technological growth in Africa!"
            />
            <div className="flex gap-4 flex-wrap max-[425px]:justify-center">
              <Link to="/about">
                <Button label="Learn More" />
              </Link>
              <Link to="/sign-up">
                <Button type="secondary" label="Sign Up" />
              </Link>
            </div>
          </div>
        </div>
        <img
          src={heroImg}
          alt="hero image"
          className="h-screen max-[425px]:h-auto"
        />
      </section>
    </>
  );
}

export default HeroHeader;
