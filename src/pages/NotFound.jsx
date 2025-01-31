import Button from "@components/Button";
import Text from "@components/Text";
import MainLayout from "@layouts/MainLayout";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <MainLayout>
        <section className="flex flex-col items-center justify-center gap-8 min-h-screen">
          <h1 className="text-9xl font-bold">
            <span className="text-primary-200">4</span>
            <span className="text-danger">0</span>
            <span className="text-secondary-100">0</span>
          </h1>
          <article className="flex flex-col items-center gap-2 max-w-md mx-auto text-center">
            <Text
              type="h1"
              content="OOPS! PAGE NOT FOUND."
              className="w-full"
            />
            <Text
              content="You must have picked the wrong door because I haven't been able to lay my eye on the page you've been searching for."
              className="w-full"
            />
          </article>
          <Link to="/">
            <Button label="BACK TO HOME" />
          </Link>
        </section>
      </MainLayout>
    </>
  );
}

export default NotFound;
