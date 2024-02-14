import PropTypes from 'prop-types';

const WhyEparcelCard = ({title,description,icon:Icon}) => {
   // description=description.slice(0,250)
  return (
   <div className="group lg:w-[370px] xl:w-[400px] bg-orange-100 relative duration-500 rounded-lg  shadow-[0px_0px_10px_2px_rgba(249,115,22,.3)] hover:shadow-[6px_6px_25px_0px_rgba(249,115,22,.8),-3px_-3px_16px_1px_rgba(249,115,22,.5)]  mt-5">
            {/* Back side */}
            <div className="p-6 mt-[80px] lg:mt-0 lg:ml-[80px] h-full flex flex-col  gap-2">
              <h3 className="text-2xl font-bold ">{title}</h3>
              <div className="bg-orange-500 px-5 py-1 rounded-tl-full rounded-br-full text-white "/>
              <p className='text-gray-500 text-justify'>{description}</p>
              <div className="bg-orange-500 px-5 py-1 rounded-tr-full rounded-bl-full text-white rounded-tl-md"/>
            </div>
            {/* Front side */}
            <div className="absolute w-full rounded-lg h-full bg-orange-50 duration-700 top-0 left-0 
            group-hover:w-[150px] group-hover:h-[150px] 
            group-hover:left-1/2 group-hover:right-1/2 lg:group-hover:top-1/2 lg:group-hover:bottom-1/2 
            group-hover:-translate-x-1/2 lg:group-hover:-translate-x-0 lg:group-hover:-translate-y-1/2 
            group-hover:-top-[75px] lg:group-hover:-left-[75px] 
            group-hover:shadow-[6px_6px_25px_0px_rgba(249,115,22,.8),-3px_-3px_16px_1px_rgba(249,115,22,.5)] 
            flex flex-col justify-center items-center group-hover:bg-orange-500">
            <Icon size={100} className='group-hover:text-white '/>
            <p className="text-2xl font-bold text-orange-500 group-hover:hidden text-center">{title}</p>
            </div>
          </div>
  )
};

WhyEparcelCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.func
};

export default WhyEparcelCard;
