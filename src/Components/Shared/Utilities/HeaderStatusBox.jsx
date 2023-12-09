


// eslint-disable-next-line react/prop-types
const HeaderStatusBox = ({children,className,value,statusName}) => {
   return(
      <div className="">
         <div className={`text-white ${className} p-3 h-[150px] flex justify-center items-center gap-5 rounded-lg`}>
            <div>
               {children}
            </div>
            <div>
               <div className="text-[50px] font-extrabold">{value}</div>
               <div className="text-xl font-semibold">{statusName}</div>
            </div>
         </div>
      </div>
   )}
export default HeaderStatusBox;