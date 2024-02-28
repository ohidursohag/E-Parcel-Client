const SectionTitle = ({ children, className }) => {
  return (
    <>
      <h1 className={`text-3xl xl:text-5xl font-bold text-gray-800 mb-5 lg:mb-10 text-center ${className}`}>{children}</h1>
    </>
  );
};
import PropTypes from "prop-types";
SectionTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default SectionTitle;
