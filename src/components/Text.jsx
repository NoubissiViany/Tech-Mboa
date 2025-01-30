import PropTypes from "prop-types";

function Text({ content, type, className }) {
  switch (type) {
    case "h1":
      return <h1 className={`font-bold text-3xl ${className}`}>{content}</h1>;
    case "h2":
      return <h2 className={`font-bold text-2xl ${className}`}>{content}</h2>;
    case "h3":
      return <h3 className={`font-bold text-xl ${className}`}>{content}</h3>;
    case "p":
      return <p className={`text-base ${className}`}>{content}</p>;
    default:
      return <p className={`text-base ${className}`}>{content}</p>; // Fallback to paragraph if type is not recognized
  }
}

Text.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(["h1", "h2", "h3", "p"]),
};

export default Text;
