import Logo from "./Logo";

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Logo className="animate-pulse text-4xl" />
    </div>
  );
}

export default Loader;
