import Text from "@components/Text";
import benefits from "../../assets/images/home/benefits.png";

function Benefits() {
  return (
    <>
      <section className="flex flex-col gap-8">
        <article className="flex gap-20 max-[425px]:flex-col max-[425px]:gap-4">
          <Text
            type="h1"
            className="w-full max-[425px]:text-center"
            content="Empowering Developers and Users: Innovate, Explore, and Connect with Local Apps"
          />
          <Text
            className="w-full max-[425px]:text-justify"
            content="Our platform offers developers a unique opportunity to showcase their creations, fostering a vibrant community of innovation. Users can easily discover, rate, and provide feedback on local applications, enhancing their experience and supporting homegrown talent. Together, we are driving technological progress in Africa, ensuring that local solutions gain the recognition they deserve."
          />
        </article>
        <img
          src={benefits}
          alt="benefits image"
          className="h-screen max-[425px]:h-auto"
        />
      </section>
    </>
  );
}

export default Benefits;
