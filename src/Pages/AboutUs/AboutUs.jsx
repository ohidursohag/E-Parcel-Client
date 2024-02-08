
import OurStory from "../../Components/Shared/AboutUs/OurStory";
import OurTeam from "../../Components/Shared/AboutUs/OurTeam";
import Container from "../../Components/Shared/Container";
import PageHeader from "../../Components/Shared/PageHeader";

const AboutUs = () => {
  return (
    <div>
      <PageHeader>About Us</PageHeader>

      <Container className={"my-10"}>
        <OurStory />
        <div className={"my-10"}>
          <OurTeam/>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
