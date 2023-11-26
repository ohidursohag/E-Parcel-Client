
import Lottie from 'lottie-react';
import loading from '../../../assets/lottie/parcelDeliver.json'
const LoadingAnimation = () => {
   return (
      <div>
         <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
            <Lottie animationData={loading} loop={true}/>
            
         </div>
      </div>
   );
};

export default LoadingAnimation;