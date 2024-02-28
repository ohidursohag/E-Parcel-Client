import ContactAddress from "../../Components/Shared/Contact/ContactAddress";
import ContactForm from "../../Components/Shared/Contact/ContactForm";
import Container from "../../Components/Shared/Container";
import PageHeader from "../../Components/Shared/PageHeader";
import Section from "../../Components/Shared/Section";

const ContactUs = () => {
  return (
    <div className="">
      <PageHeader>Contact Us</PageHeader>
      <Container className={`my-10`}>
        <Section>
        <ContactAddress/>
        </Section>
        <Section>
        <h1 className="text-3xl  font-semibold  text-orange-500 text-center my-5">Connect with Us</h1>
        <ContactForm/>
        </Section>
      </Container>
    </div>
  );
};

export default ContactUs;
