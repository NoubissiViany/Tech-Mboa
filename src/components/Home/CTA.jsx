import Button from "@components/Button";
import Text from "@components/Text";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <>
      <section className="flex flex-col gap-8">
        <article className="flex gap-20 max-[425px]:flex-col max-[425px]:gap-4">
          <Text
            type="h1"
            className="w-full max-[425px]:text-center"
            content="Join Our Developer Community"
          />
          <div className="flex flex-col gap-4">
            <Text
              className="w-full max-[425px]:text-justify"
              content="Dive into a world of innovation by exploring and submitting applications created by talented Cameroonian developers. Your contributions can shape the future of technology in Africa!"
            />
            <div className="flex gap-4 flex-wrap max-[425px]:justify-center">
              <Link to="/sign-up">
                <Button label="Sign Up" />
              </Link>
              <Link to="/about">
                <Button type="secondary" label="Learn More" />
              </Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default CTA;
