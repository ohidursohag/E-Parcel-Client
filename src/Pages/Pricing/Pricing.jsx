import ContactForm from "../../Components/Shared/Contact/ContactForm";
import Container from "../../Components/Shared/Container";
import PageHeader from "../../Components/Shared/PageHeader";
import DeliveryCharges from "../../Components/Shared/Pricing/DeliveryCharges";
import Section from "../../Components/Shared/Section";

const Pricing = () => {

  return (
    <div>
       <PageHeader>Delivery Charges</PageHeader>
       <Section>
       <Container >
        <DeliveryCharges/>
       </Container>
       </Section>
       <Section>
          <h1 className="text-3xl  font-semibold  text-orange-500 text-center my-5">
            Connect with Us
          </h1>
          <ContactForm />
        </Section>
    </div>
  )
};

export default Pricing;
