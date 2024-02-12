// eslint-disable-next-line react/prop-types
const HeaderStatusBox = ({ children, className, value, statusName,boxShadow }) => {
  return (
    <div className={`relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg ${boxShadow}`}>
      <div
        className={`bg-clip-border mx-4 rounded-xl overflow-hidden  shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center ${className} ${boxShadow}`}>
        {children}
      </div>
      <div className='p-4 text-right'>
        <p className="block antialiased font-sans font-semibold leading-normal  text-gray-500">
          {statusName}
        </p>
        <h4 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900">
          {value}
        </h4>
      </div>
    </div>
  );
};
export default HeaderStatusBox;
