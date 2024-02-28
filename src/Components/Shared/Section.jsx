import PropTypes from 'prop-types';

const Section = ({children,className}) => {

  return (
    <div className={`${className} my-10 md:my-16 lg:my-24 2xl:my-28`}>
       {children}
    </div>
  )
};

Section.propTypes = {
   children: PropTypes.node,
   className: PropTypes.string,
};

export default Section;
