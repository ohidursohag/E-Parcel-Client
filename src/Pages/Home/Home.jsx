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

const Home = () => {
  const { data: allBookings } = useQuery({
    queryKey: ["hompage-state"],
    queryFn: async () => await axiosSecure.get("/hompage-state"),
  });
  // console.log(allBookings);
  return (
    <div>
      <Banner />
      <Container>
        <div className="my-16">
          {/* <OurFeatures /> */}
          <SectionTitle>Why E-Parcel?</SectionTitle>
          <WhyEParcel/>
          <Status allBookings={allBookings} />
        </div>
        <div className="my-16">
        <SectionTitle>Our Location</SectionTitle>
          <ContactAddress/>
        </div>
        <div className="my-16">
          <TopDeliveryMen allBookings={allBookings} />
        </div>
        <div className="my-16">
        <h1 className="text-3xl  font-semibold  text-orange-500 text-center my-5">Connect with Us</h1>
          <ContactForm/>
        </div>
      </Container>
    </div>
  );
};
export default Home;
