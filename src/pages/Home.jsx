import Benefits from "@components/Home/Benefits";
import CTA from "@components/Home/CTA";
import FeatureList from "@components/Home/FeatureList";
import Gallery from "@components/Home/Gallery";
import HeroHeader from "@components/Home/HeroHeader";
import HowItWorks from "@components/Home/HowItWorks";
import MainLayout from "@layouts/MainLayout";

function Home() {
  return (
    <>
      <MainLayout>
        <div className="flex flex-col gap-16">
          <HeroHeader />
          <FeatureList />
          <Benefits />
          <HowItWorks />
          <Gallery />
          <CTA />
        </div>
      </MainLayout>
    </>
  );
}

export default Home;
