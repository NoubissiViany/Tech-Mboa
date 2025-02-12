import AboutSec from "@components/About/AboutSec";
import Benefits from "@components/About/Benefits";
import CTA from "@components/About/CTA";
import Header from "@components/About/Header";
import MainLayout from "@layouts/MainLayout";

function About() {
  return (
    <>
      <MainLayout>
        <div className="flex flex-col gap-16">
          <Header />
          <AboutSec />
          <Benefits />
          <CTA />
        </div>
      </MainLayout>
    </>
  );
}

export default About;
