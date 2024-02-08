import { useQuery } from "@tanstack/react-query";
import Banner from "../../Components/Home/Banner/Banner";
import Status from "../../Components/Home/Status/Status";
import TopDeliveryMen from "../../Components/Home/TopDeliveryMen/TopDeliveryMen";
import Container from "../../Components/Shared/Container";
import axiosSecure from "../../Api/axiosSecure";
import ContactForm from "../../Components/Shared/Contact/ContactForm";
import ContactAddress from "../../Components/Shared/Contact/ContactAddress";
import SectionTitle from "../../Components/Shared/Utilities/SectionTitle";
import WhyEParcel from "../../Components/Home/OurFeatures/WhyEParcel";
import DeliveryCharges from "../../Components/Shared/Pricing/DeliveryCharges";
import OurStory from "../../Components/Shared/AboutUs/OurStory";
import useTeamData from "../../Hooks/useTeamData";
import TeamCard from "../../Components/Cards/TeamCard";
import { Link } from "react-router-dom";

const Home = () => {
  const { ourTeam } = useTeamData();
  const { data: allBookings } = useQuery({
    queryKey: ["hompage-state"],
    queryFn: async () => await axiosSecure.get("/hompage-state"),
  });
  return (
    <div>
      <Banner />
      <Container>
        <div className="my-16">
          {/* <OurFeatures /> */}
          <SectionTitle>Why E-Parcel?</SectionTitle>
          <WhyEParcel />
          <Status allBookings={allBookings} />
        </div>
        <div className="my-16">
          <OurStory />
        </div>
        <div className="my-16">
          <SectionTitle>Meet Our Team</SectionTitle>
          <div id="" className="flex justify-center flex-wrap gap-5">
            {ourTeam.slice(0, 5).map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
          <Link
            to={"/about-us#our-team"}
            className="text-xl mx-auto my-5 w-max px-5 py-3 bg-orange-500 text-white relative overflow-hidden group z-10 rounded-lg shadow-md flex items-center gap-2"
          >
            <span className="absolute -z-[1] bg-orange-200 rotate-12 -inset-12 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
            <span className="absolute -z-[1] bg-gray-500  rotate-12 -inset-12 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
            <span className="absolute -z-[1] bg-orange-500 rotate-12 -inset-12 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
            Learn More
          </Link>
        </div>
        <div className="my-16">
          <DeliveryCharges />
        </div>
        <div className="my-16">
          <SectionTitle>Our Location</SectionTitle>
          <ContactAddress />
        </div>

        <div className="my-16">
          <TopDeliveryMen allBookings={allBookings} />
        </div>
        <div className="my-16">
          <h1 className="text-3xl  font-semibold  text-orange-500 text-center my-5">
            Connect with Us
          </h1>
          <ContactForm />
        </div>
      </Container>
    </div>
  );
};
export default Home;
