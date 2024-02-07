
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.svg'
const Logo = () => {
return (
  <>
    <Link to="/">
      <div className="w-max">
        <div className="flex leading-none   gap-1">
          <figure className=" flex items-center justify-center rounded-md">
            <img className="w-14 lg:w-14" src={logo} alt="" />
          </figure>
          <div className="flex items-center  font-Black-Ops-One">
            <div className="text-[40px] lg:text-[50px] lg:leading-[55px]  ">
              e
            </div>
            <div className="text-[25px] lg:text-[50px] lg:leading-[51px]  text-orange-500 ">
              Parcel
            </div>
          </div>
        </div>
      </div>
    </Link>
  </>
);}
export default Logo;