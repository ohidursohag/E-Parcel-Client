import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SocialMediaLinks = ({className}) => {

  return (
    <div>
       <div className={`flex gap-5 ${className}`}>
            <Link to=''><FaLinkedin color="#f97316" className="hover:scale-110 duration-200" size={30}/> </Link>
            <Link to=''><FaSquareFacebook color="#f97316" className="hover:scale-110 duration-200" size={30}/> </Link>
            <Link to=''><FaTwitterSquare color="#f97316" className="hover:scale-110 duration-200" size={30}/> </Link>
            <Link to=''><FaSquareInstagram color="#f97316" className="hover:scale-110 duration-200" size={30}/> </Link>
          </div>
    </div>
  )
};
import PropTypes from 'prop-types';
SocialMediaLinks.propTypes = {
    className: PropTypes.string
};
export default SocialMediaLinks;
