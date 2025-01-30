import PropTypes from "prop-types";

function ExternalLink({ link, label, className }) {
  return (
    <div>
      <a href={link} className={`hover:underline ${className}`}>
        {label}
      </a>
    </div>
  );
}

ExternalLink.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ExternalLink;
