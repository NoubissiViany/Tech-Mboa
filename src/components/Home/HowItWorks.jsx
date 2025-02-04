import Button from "@components/Button";
import Text from "@components/Text";
import { userGuide } from "@data/homeInfo";
import { BsBox } from "react-icons/bs";
import { Link } from "react-router-dom";

function HowItWorks() {
  return (
    <>
      <section className="flex flex-col gap-8 -mt-10">
        <article className="flex flex-col justify-center items-center gap-2">
          <h5 className="font-bold">Explore</h5>
          <div className="flex flex-col gap-4 items-center">
            <Text
              type="h1"
              className="text-center w-1/2 max-[425px]:w-full"
              content="Discover and Engage with Local Applications"
            />
            <Text
              className="w-7/12 text-center max-[425px]:w-full max-[425px]:text-justify"
              content="Our platform empowers you to explore a diverse range of applications developed by talented Cameroonian developers. Rate, comment, and contribute to the growth of local innovation."
            />
          </div>
        </article>
        <div className="flex gap-8 justify-center flex-wrap">
          {userGuide.map((data, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <BsBox size={30} />
              <Text
                className="text-center w-72"
                type="h3"
                content={data.heading}
              />
              <Text content={data.detail} className="text-center" />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-4 flex-wrap max-[425px]:justify-center">
          <Link to="/sign-up">
            <Button type="secondary" label="Submit" />
          </Link>
          <Link to="/about">
            <Button label="Learn More" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default HowItWorks;
