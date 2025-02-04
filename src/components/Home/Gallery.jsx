import Text from "@components/Text";
import Carousel from "@components/Carousel";
import SlideImg1 from "../../assets/images/home/galleryImg1.png";
import SlideImg2 from "../../assets/images/home/galleryImg2.png";
import SlideImg3 from "../../assets/images/home/galleryImg3.png";

function Gallery() {
  const items = [
    { image: SlideImg1, alt: "Slide 1" },
    { image: SlideImg2, alt: "Slide 2" },
    { image: SlideImg3, alt: "Slide 3" },
  ];
  return (
    <>
      <section className="flex flex-col gap-8">
        <article className="flex flex-col gap-4 items-center">
          <Text type="h1" content="Featured Apps" />
          <Text
            className="max-[425px]:text-center"
            content="Explore innovative applications from talented Cameroonian developers."
          />
        </article>
        <Carousel items={items} />
      </section>
    </>
  );
}

export default Gallery;
