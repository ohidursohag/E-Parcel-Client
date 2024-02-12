import UpdateBookingsDataForm from "../../../Components/Form/UpdateBookingsDataForm";
import Title from "../../../Components/Shared/Utilities/Title";


const UpdateBookingsData = () => {
return (
  <div>
    <Title title="Update Bookings" />
    <div className="px-5 lg:px-10 max-w-[1100px] mx-auto">
      <UpdateBookingsDataForm />
    </div>
  </div>
);}
export default UpdateBookingsData;