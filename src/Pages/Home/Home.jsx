import { useQuery } from "@tanstack/react-query";
import Banner from "../../Components/Home/Banner/Banner";
import OurFeatures from "../../Components/Home/OurFeatures/OurFeatures";
import Status from "../../Components/Home/Status/Status";
import TopDeliveryMen from "../../Components/Home/TopDeliveryMen/TopDeliveryMen";
import Container from "../../Components/Shared/Container";
import axiosSecure from "../../Api/axiosSecure";

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
        <div>
          <OurFeatures />
          <Status allBookings={allBookings} />
        </div>
        <div className="my-16">
          <TopDeliveryMen allBookings={allBookings} />
        </div>

      </Container>
    </div>
  );
};
export default Home;
