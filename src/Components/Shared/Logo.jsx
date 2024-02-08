
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.svg'
const Logo = () => {
return (
  <>
    <Link to="/">
      <div className="w-max">
        <div className="flex leading-none   gap-1">
          <figure className=" flex items-center justify-center rounded-md">
            <img className="w-10 lg:w-14" src={logo} alt="" />
          </figure>
          <div className="flex items-center  font-Black-Ops-One">
            <div className="text-[35px] lg:text-[50px] leading-[36px] lg:leading-[55px]  ">
              e
            </div>
            <div className="text-[30px] lg:text-[50px] leading-[31px] lg:leading-[51px]  text-orange-500 ">
              Parcel
            </div>
          </div>
        </div>
      </div>
    </Link>
  </>
);}
export default Logo;