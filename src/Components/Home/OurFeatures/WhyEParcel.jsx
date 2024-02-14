import WhyEparcelCard from "../../Cards/WhyEparcelCard";
import { ourFeatures } from "./ourFeatures";

const WhyEParcel = () => {
  return (
    <div className="flex justify-center mt-20 lg:mt-5">
      <div className="rounded-lg  grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-5 gap-y-[75px] lg:gap-y-5 lg:gap-x-[100px]">
        {ourFeatures.map((feature, idx) => <WhyEparcelCard key={idx} title={feature.title} description={feature.description} icon={feature.icon}/>)}
      </div>
    </div>
  );
};

export default WhyEParcel;
