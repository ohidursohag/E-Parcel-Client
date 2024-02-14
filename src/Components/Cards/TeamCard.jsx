import SocialMediaLinks from "../Shared/Utilities/SocialMediaLinks";

const TeamCard = ({ member }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('${member.image}')`,
        }}
        className=" group  h-[400px] bg-no-repeat min-w-[280px] max-w-[350px] bg-cover bg-center overflow-hidden rounded-xl shadow-[0px_0px_10px_2px_rgba(249,115,22,.5)] hover:shadow-[3px_3px_15px_0px_rgba(249,115,22,.8),-3px_-3px_16px_1px_rgba(249,115,22,.5)] relative"
      >
        <div className=" bg-white/60 h-full w-full  absolute right-0 duration-500 -bottom-[calc(100%-60px)] group-hover:bottom-0 text-center backdrop-blur max-w-[350px] flex flex-col justify-between ">

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
