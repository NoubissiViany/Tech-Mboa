import Button from "@components/Button";
import Text from "@components/Text";
import { BsBox } from "react-icons/bs";
import BenefitImg from "../../assets/images/about/BenefitImg.png";

function Benefits() {
  return (
    <>
      <section className="flex gap-8 max-[425px]:flex-col">
        <article className="flex flex-col gap-4">
          <h5 className="font-semibold max-[425px]:text-center">Innovate</h5>
          <Text
            className="w-2/3 max-[425px]:text-center max-[425px]:w-auto"
            type="h1"
            content="Empowering Developers and Users in Africa"
          />
          <Text
            className="max-[425px]:text-justify"
            content="Our plateform fosters a vibrant ecosystem for developers to showcase their applications. Users benefits from discovering innovative solutions tailored to their needs"
          />
          <div className="flex gap-8 max-[425px]:flex-col">
            <div className="flex flex-col gap-4 max-[425px]:items-center">
              <BsBox size={30} />
              <Text type="h3" content="For Developers" />
              <Text
                className="max-[425px]:text-center"
                content="Gain visibility, receive feedback, and connect with a community to tech enthusiasts."
              />
            </div>
            <div className="flex flex-col gap-4 max-[425px]:items-center">
              <BsBox size={30} />
              <Text type="h3" content="For Users" />
              <Text
                className="max-[425px]:text-center"
                content="Explore, rate and engage with local applications that enhance your daily life"
              />
            </div>
          </div>
          <div className="max-[425px]:flex max-[425px]:justify-center">
            <Button type="secondary" label="Sign Up" className="w-32" />
          </div>
        </article>
        <img
          src={BenefitImg}
          alt="Benefit image"
          className="w-5/12 object-cover max-[425px]:w-auto"
        />
      </section>
    </>
  );
}

export default Benefits;
