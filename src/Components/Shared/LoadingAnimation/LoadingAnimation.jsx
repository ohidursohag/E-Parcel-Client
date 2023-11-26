
import Lottie from 'lottie-react';
import loading from '../../../assets/lottie/loading.json'
const LoadingAnimation = () => {
   return (
      <div>
         <div className="container mx-auto min-h-screen flex  justify-center items-center">
            <div className='max-w-[300px]'>
               <Lottie animationData={loading} loop={true} />
            </div>
            
         </div>
      </div>
   );
};

export default LoadingAnimation;