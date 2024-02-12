import ParcelBookingForm from "../../../Components/Form/ParcelBookingForm";
import Title from "../../../Components/Shared/Utilities/Title";


const BookAParcel = () => {
return (
  <div>
    <Title title="Book A Parcel" />
    <div className="px-5 lg:px-10 max-w-[1100px] mx-auto">
      <ParcelBookingForm />
    </div>
  </div>
);}
export default BookAParcel;