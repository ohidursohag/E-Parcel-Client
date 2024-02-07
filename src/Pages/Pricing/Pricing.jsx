import Container from "../../Components/Shared/Container";
import PageHeader from "../../Components/Shared/PageHeader";
import DeliveryCharges from "../../Components/Shared/Pricing/DeliveryCharges";

const Pricing = () => {

  return (
    <div>
       <PageHeader>Delivery Charges</PageHeader>
       <Container className={'my-10'}>
        <DeliveryCharges/>
       </Container>
    </div>
  )
};

export default Pricing;
