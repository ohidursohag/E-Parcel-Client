
import logo from '../../assets/logo/logo.png'
const Logo = () => {
return(
   <>       
      <div className='flex leading-none items-end'>
         <figure className='w-14 h-12 bg-orange-500 flex items-center justify-center rounded-md'>
            <img className='w-10' src={logo} alt="" />
         </figure>
         <div className='text-[67px] font-black -mb-[6px]'>E</div>
         <div className='text-[40px]  -mb-[5px] font-bold text-orange-500'>Parcel</div>
     </div>
   </>
)}
export default Logo;