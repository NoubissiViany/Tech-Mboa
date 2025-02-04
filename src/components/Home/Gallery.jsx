import Text from "@components/Text";
import Carousel from "@components/Carousel";

function Gallery() {
  const items = [
    { image: "/src/assets/images/home/galleryImg1.png", alt: "Slide 1" },
    { image: "/src/assets/images/home/galleryImg2.png", alt: "Slide 2" },
    { image: "/src/assets/images/home/galleryImg3.png", alt: "Slide 3" },
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
