import PropTypes from "prop-types";

function Button({ label, className, onClick, type = "default" }) {
  const btnType =
    type === "default"
      ? "bg-primary-200 text-white border border-primary-200 hover:text-primary-200 hover:bg-white"
      : "bg-white text-primary-200 border border-primary-200 hover:text-white hover:bg-primary-200";

  return (
    <button
      className={`py-2 px-8 rounded-full font-medium text-base ${btnType} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["default", "secondary"]),
};

export default Button;
