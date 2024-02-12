import PropTypes from "prop-types";

const Title = ({ title, titleClassName }) => {
   return (
     <div className={`text-center mt-10 mb-5 lg:mb-10 `}>
       <h1
         className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-gray-700 border-y-[2px] lg:border-y-[3px] font-bold px-2 lg:px-5 w-max mx-auto py-1 border-orange-500 ${titleClassName}`}
       >
         {title}
       </h1>
     </div>
   );
}
Title.propTypes = {
   title: PropTypes.string.isRequired,
   titleClassName: PropTypes.string
}
export default Title;