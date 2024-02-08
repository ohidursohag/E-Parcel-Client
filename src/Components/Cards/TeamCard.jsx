import SocialMediaLinks from "../Shared/Utilities/SocialMediaLinks";

const TeamCard = ({ member }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('${member.image}')`,
        }}
        className=" group  h-[400px] bg-no-repeat min-w-[280px] max-w-[350px] bg-cover bg-center overflow-hidden rounded-xl shadow-[6px_6px_25px_0px_rgba(249,115,22,.8),-3px_-3px_16px_1px_rgba(249,115,22,.5)] relative"
      >
        <div className=" bg-white/60 h-full w-full  absolute right-0 duration-500 -bottom-[calc(100%-60px)] group-hover:bottom-0 text-center backdrop-blur max-w-[350px] flex flex-col justify-between ">
          {/* before:absolute before:left-0  before:top-0 before:bg-transparent before:block before:w-0 before:h-0 before:border-b-[30px] before:group-hover:hidden before:border-l-orange-500 before:border-l-[60px] before:border-t-[30px] before:border-t-transparent before:border-b-transparent after:absolute after:right-0  after:top-0 after:bg-transparent after:block after:w-0 after:h-0 after:border-b-[30px] after:group-hover:hidden after:border-r-orange-500 after:border-r-[60px] after:border-t-[30px] after:border-t-transparent after:border-b-transparent */}
          <h3 className="text-2xl font-bold bg-white/50 shadow-[0px_0px_5px_0px_rgba(249,115,22,.8),0px_-3px_6px_1px_rgba(249,115,22,.5)] relative group-hover:hidden transition-opacity duration-600 text-gray-700  py-4 ">
            {member.name}
          </h3>
          <div className="px-5 flex-1 gap-2 flex flex-col items-center justify-center">
            <figure className="w-[100px] h-[100px] mx-auto border-2  mask-hexagon mask">
              <img
                className="w-full h-full object-cover object-center bg-gray-200/50 backdrop-blur"
                src={member.image}
                alt=""
              />
            </figure>
            <div className="space-y-2">
              <h4 className="text-xl leading-none font-bold text-gray-600">
                {member.position}
              </h4>
              <p className="leading-none">
                <span className="text-xl font-bold text-orange-500 leading-none">
                  “{" "}
                </span>
                {member.quote}
                <span className="text-xl font-bold text-orange-500 leading-none">
                  {" "}
                  ”
                </span>
              </p>
              <div className="flex justify-center pt-5">
                <SocialMediaLinks />
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold bg-white/50 shadow-[0px_0px_5px_0px_rgba(249,115,22,.8),0px_-3px_6px_1px_rgba(249,115,22,.5)]  text-gray-700  py-4">
            {member.name}
          </h3>
        </div>
      </div>
    </>
  );
};
import PropTypes from "prop-types";
TeamCard.propTypes = {
  member: PropTypes.object,
};
export default TeamCard;
