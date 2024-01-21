
import OurStory from "../../Components/Shared/AboutUs/OurStory";
import Container from "../../Components/Shared/Container";
import PageHeader from "../../Components/Shared/PageHeader";

const AboutUs = () => {
  return (
    <div>
      <PageHeader>About Us</PageHeader>

      <Container className={'my-10'}>
        <OurStory/>
      </Container>
    </div>
  );
};

export default AboutUs;
