import Button from "@components/Button";
import Text from "@components/Text";
import { Link } from "react-router-dom";
import CTAImg from "../../assets/images/about/CTAImg.png";

function CTA() {
  return (
    <>
      <section className="flex gap-8 max-[425px]:flex-col">
        <article className="flex flex-col gap-4">
          <Text
            type="h1"
            className="max-[425px]:text-center"
            content="Join the Innovation Revolution "
          />
          <Text
            className="max-[425px]:text-justify"
            content="Get involved by submitting your app, explore others, and sharing your valuable feedback today!"
          />
          <div className="flex gap-4 flex-wrap max-[425px]:justify-center">
            <Link to="/sign-up">
              <Button label="Submit" />
            </Link>
            <Link to="/">
              <Button type="secondary" label="Explore" />
            </Link>
          </div>
        </article>
        <img
          src={CTAImg}
          alt="CTA image"
          className="w-9/12 h-80 object-cover max-[425px]:w-auto max-[425px]:h-auto"
        />
      </section>
    </>
  );
}

export default CTA;
