
import TeamCard from "../../Cards/TeamCard";
import SectionTitle from "../Utilities/SectionTitle";
import useTeamData from "../../../Hooks/useTeamData";
import { useState } from "react";
import { FaTruckArrowRight } from "react-icons/fa6";

const OurTeam = () => {
  const { ourTeam } = useTeamData()
  const [showAllTeam, setShowAllTeam] = useState(false)

  return (
    <div id="our-team" className="mt-20 mb-16">
      <SectionTitle>Meet Our Team</SectionTitle>
      <div className="flex justify-center flex-wrap gap-5">
        {showAllTeam
          ? ourTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))
          : ourTeam
              .slice(0, 5)
              .map((member) => <TeamCard key={member.id} member={member} />)}
      </div>
      <button
        onClick={() => setShowAllTeam(!showAllTeam)}
        className="text-xl mx-auto my-5 w-max px-5 py-3 bg-orange-500 text-white relative overflow-hidden group z-10 rounded-lg shadow-md flex items-center gap-2"
      >
        <span className="absolute -z-[1] bg-orange-200 rotate-12 -inset-12 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
        <span className="absolute -z-[1] bg-gray-500  rotate-12 -inset-12 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
        <span className="absolute -z-[1] bg-orange-500 rotate-12 -inset-12 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
        {showAllTeam ? "See Less" : "See All"}
      </button>
    </div>
  );
};

export default OurTeam;
