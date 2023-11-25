
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'
const Logo = () => {
return(
   <>       
      <Link to='/'>
         <div className='w-max'>
            <div className='flex leading-none items-end mb-[4px] gap-1'>
               <figure className='w-14 h-12 bg-orange-500 flex items-center justify-center rounded-md'>
                  <img className='w-10' src={logo} alt="" />
               </figure>
               <div className='text-[67px] font-black -mb-[8px]'>E</div>
               <div className='text-[40px]  -mb-[5px] font-bold text-orange-500 tracking-[1px] '>Parcel</div>
            </div>
            <hr className='border-2 border-black' />
            <div className='font-semibold font-railway italic text-orange-500 '>Streamlined Parcel Solutions</div>
         </div>
      </Link>
   </>
)}
export default Logo;