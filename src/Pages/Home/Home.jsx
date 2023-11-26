import Banner from "../../Components/Home/Banner/Banner";
import OurFeatures from "../../Components/Home/OurFeatures/OurFeatures";
import Status from "../../Components/Home/Status/Status";
import Container from "../../Components/Shared/Container";


const Home = () => {
    
    
return(
    <div>       
        <Banner />
        <Container>
            <OurFeatures />
            <Status/>
        </Container>
   </div>
)}
export default Home;