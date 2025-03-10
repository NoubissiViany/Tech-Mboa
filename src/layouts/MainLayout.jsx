import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import PropTypes from "prop-types";

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 bg-neutral-200 max-[425px]:p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired, // Use node for more flexibility
};

export default MainLayout;
