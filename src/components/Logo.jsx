import PropTypes from "prop-types";

function Logo({ className }) {
  return (
    <>
      <a href="/" className={`text-2xl font-bold font-serif ${className}`}>
        <span className="text-primary-200">Tech</span>
        <span className="text-danger">M</span>
        <span className="text-secondary-100">boa</span>
      </a>
    </>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
