import Text from "@components/Text";
import { devShowcase } from "@data/homeInfo";
import { BsChevronRight } from "react-icons/bs";

function FeatureList() {
  return (
    <>
      <section className="flex flex-col gap-8">
        <article className="flex gap-20 max-[425px]:flex-col max-[425px]:gap-4">
          <Text
            type="h1"
            className="w-full max-[425px]:text-center"
            content="Discover the innovative features of our application platform today!"
          />
          <Text
            className="w-full max-[425px]:text-justify"
            content="Our platform allows developers to easily submit their applications, creating a vibrant ecosystem for innovation. Users can explore a diverse range of applications, providing valuable feedback through ratings and comments. Join us in promoting local technology and fostering a community of creators."
          />
        </article>
        <div className="flex gap-8 max-[425px]:flex-col">
          {devShowcase.map((data, index) => (
            <div key={index} className="flex flex-col gap-4">
              <img src={data.img} alt={data.alt} />
              <Text type="h3" content={data.heading} />
              <Text content={data.detail} />
              <div className="flex items-center gap-2">
                <Text content={data.name} />
                <BsChevronRight size={12} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default FeatureList;
