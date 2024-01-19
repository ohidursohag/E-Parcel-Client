import ContactAddress from "../../Components/Shared/Contact/ContactAddress";
import ContactForm from "../../Components/Shared/Contact/ContactForm";
import Container from "../../Components/Shared/Container";
import PageHeader from "../../Components/Shared/PageHeader";

const ContactUs = () => {
  return (
    <div className="">
      <PageHeader>Contact Us</PageHeader>
      <Container className={`my-10`}>
        <ContactAddress/>
        <h1 className="text-3xl  font-semibold  text-orange-500 text-center my-5">Connect with Us</h1>
        <ContactForm/>
      </Container>
    </div>
  );
};

export default ContactUs;
