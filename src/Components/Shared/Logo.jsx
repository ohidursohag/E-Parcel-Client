
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'
const Logo = () => {
return(
   <>       
      <Link to='/'>
         <div className='w-max'>
            <div className='flex leading-none items-end mb-[4px] gap-1'>
               <figure className='w-10 lg:w-14 lg:h-12 bg-orange-500 flex items-center justify-center rounded-md'>
                  <img className='w-8 lg:w-10' src={logo} alt="" />
               </figure>
               <div className='text-[40px] lg:text-[67px] font-black -mb-[5px] lg:-mb-[8px]'>E</div>
               <div className='text-[25px] lg:text-[40px] -mb-[3px] lg:-mb-[5px] font-bold text-orange-500 tracking-[1px] '>Parcel</div>
            </div>
            <hr className='border-2 border-black' />
            <div className='text-[12px] lg:text-base font-railway italic text-orange-500 '>Streamlined Parcel Solutions</div>
         </div>
      </Link>
   </>
)}
export default Logo;