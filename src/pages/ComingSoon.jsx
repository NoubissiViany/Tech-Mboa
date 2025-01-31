import Button from "@components/Button";
import Text from "@components/Text";
import MainLayout from "@layouts/MainLayout";
import { BsEmojiSunglasses } from "react-icons/bs";
import { Link } from "react-router-dom";

function ComingSoon() {
  return (
    <div>
      <MainLayout>
        <section className="flex flex-col items-center justify-center gap-8 min-h-screen">
          <BsEmojiSunglasses size={70} color="#006B3D" />
          <article className="flex flex-col items-center gap-4 mx-auto text-center">
            <Text type="h1" content="COMING SOON" className="w-full" />
            <Text
              content="We're working hard to bring you something amazing.Stay tuned"
              className="w-full"
            />
          </article>
          <Link to="/">
            <Button label="BACK TO HOME" />
          </Link>
        </section>
      </MainLayout>
    </div>
  );
}

export default ComingSoon;
