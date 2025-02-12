import Button from "@components/Button";
import Text from "@components/Text";

function Header() {
  return (
    <div>
      <section>
        <article className="flex flex-col gap-4 max-[425px]:justify-center max-[425px]:items-center">
          <h5 className="font-semibold">Innovate</h5>
          <Text
            type="h1"
            className="max-[425px]:text-center"
            content="Empowering Local Developers"
          />
          <Text
            className="max-[425px]:text-justify"
            content="Our mission is to centralize and elevate cameroonian applications, fostering innovation and collaboration"
          />
          <Button label="Sign Up" className="w-32" />
        </article>
      </section>
    </div>
  );
}

export default Header;
