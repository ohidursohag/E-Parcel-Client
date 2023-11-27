import PropTypes from "prop-types";

const Title = ({ title, titleClassName }) => {
   return(
      <div className={`text-center mb-10 `}>        
         <h1 className={`text-[50px] text-gray-700 border-y-[4px] font-medium px-16 w-max mx-auto py-1 border-orange-500 ${titleClassName}`}>{title}</h1>
      </div>
   )
}
Title.propTypes = {
   title: PropTypes.string.isRequired,
   titleClassName: PropTypes.string
}
export default Title;