import Text from "@components/Text";

function AboutSec() {
  return (
    <>
      <section className="flex flex-col gap-8">
        <article className="flex gap-20 max-[425px]:flex-col max-[425px]:gap-4">
          <Text
            type="h1"
            className="w-full max-[425px]:text-center"
            content="Empowering Cameroonian developers to innovate and connect through a centralized plateform"
          />
          <Text
            className="w-full max-[425px]:text-justify"
            content="Our platform is dedicated to fostering a vibrand tech community in Cameroon by providing developers with a space to showcase their applications. We aim to enhance user engagement through ratings and comments, creating feedback loop that drives innovation. Together, we are buiding a future where local talent thrives and technological advancements are celebrated"
          />
        </article>
      </section>
    </>
  );
}

export default AboutSec;
