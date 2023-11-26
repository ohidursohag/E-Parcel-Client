
import bannerBg from '../../../assets/image/Banner2.jpg'
const Banner = () => {
return(
   <div style={{backgroundImage: `url(${bannerBg})`}} className="min-h-[600px] w-full bg-cover bg-center bg-no-repeat">
       <p> HELLO I Am Banner </p>
   </div>
)}
export default Banner;