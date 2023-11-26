import Banner from "../../Components/Home/Banner/Banner";
import OurFeatures from "../../Components/Home/OurFeatures/OurFeatures";
import Status from "../../Components/Home/Status/Status";
import TopDeliveryMen from "../../Components/Home/TopDeliveryMen/TopDeliveryMen";
import Container from "../../Components/Shared/Container";


const Home = () => {
    
    
return(
    <div>       
        <Banner />
        <Container>
            <div>
                <OurFeatures />
                <Status />
            </div>
            <div className="my-16">
                <TopDeliveryMen />
            </div>
        </Container>
   </div>
)}
export default Home;