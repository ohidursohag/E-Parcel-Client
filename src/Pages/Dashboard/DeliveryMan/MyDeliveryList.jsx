
import {  FaMapMarkerAlt } from "react-icons/fa";
import useGetAllBookingsData from "../../../Hooks/useGetAllBookingsData";
import useGetCurrentUser from "../../../Hooks/useGetCurrentUser";
import { RxCross1 } from "react-icons/rx";
import Title from "../../../Components/Shared/Utilities/Title";
import { IoIosCheckbox } from "react-icons/io";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useUpdateBookingsData from "../../../Hooks/useUpdateBookingsData";


const MyDeliveryList = () => {
    // const {user} = useAuth()
    const { currentUser } = useGetCurrentUser()
    // const { deliveryManId, setDeliveryManId } = useState(currentUser?._id)
    const deliveryManId =  currentUser?._id;
    const { mutate } = useUpdateBookingsData();
    const { allBookings: myDeliveryList,isLoading } = useGetAllBookingsData({ deliveryManId });
        

    if (isLoading) {
        return;
    }
  
    const handleDeliveredBooking = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You Delivered this Parcel?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const updatedBookingData = {
                        status: "delivered",
                        
                    }
                    mutate({ id, updatedBookingData })
                    toast.success('Parcel Delivered Successfully')

                } catch (error) {
                    toast.error(error.message)
                }
            }
        })

    }
    const handleCancelBooking = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Cancel this Bookings?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const updatedBookingData = {
                        status: "canceled",
                        deliveryManId: '',
                        deliveryManName: '',
                        deliveryManPhoneNumber:'',
                    }
                    mutate({ id, updatedBookingData })
                    toast.success('Bookings Canceled')

                } catch (error) {
                    toast.error(error.message)
                }
            }
        })

    }
    // console.log(currentUser?._id);
    // console.log(deliveryManId);
    console.log(myDeliveryList);
return(
   <div>
        <Title title="myDeliveryList " />
        <div className=" mx-auto bg-white px-5 py-10">
            <div className="text-3xl font-bold font-cinzel flex justify-between">
                <h2 >Total Delivery: {myDeliveryList?.length}</h2>
            </div>

            {/* Table */}
            <div className="overflow-x-auto my-10 rounded-t-lg shadow">
                <table className="table table-xs  w-full  ">
                    {/* head */}
                    <thead className="bg-orange-500   h-[50px]   text-white ">
                        <tr className="text-[14px] ">
                            <th>
                            </th>
                            <th>Parcel</th>
                            <th className="">Sender</th>
                            <th className="w-[150px]">Receiver</th>
                            <th className="">Dates</th>  
                            <th className=""> Status</th>
                            <th className=""> Location</th>
                            <th className="">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#737373]">
                        {
                            myDeliveryList?.map((booking, index) => <tr key={booking?._id} className="">
                                <th className="text-lg text-center text-black font-bold">{index + 1}</th>
                                <td>
                                    <div className=" py-3 ">
                                        <div className=" border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Parcel Type:</span> <span className="text-orange-500">{booking?.parcelType}</span></div>
                                        <div className=" border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Parcel Weight:</span> <span className="text-orange-500">{booking?.parcelWeight} Kg</span></div>
                                        <div className=" border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Delivery Coast:</span> <span className="text-orange-500">{booking?.bookingPrice} Tk.</span></div>
                                        
                                    </div>
                                </td>
                                <td className="">
                                    <div className="  ">
                                        <div className=" border-b pb-1 border-b-orange-100  font-medium text-gray-600">{booking?.senderName}</div>
                                        
                                        <div className=" "><span className=" font-medium text-gray-600">Phone: </span> <span className="text-orange-500">{booking?.senderPhone} </span></div>
                                    </div>
                                </td>
                                <td>
                                    <div className="  ">
                                        <div className=" border-b pb-1 border-b-orange-100  font-medium text-gray-600">{booking?.receiverName}</div>
                                        <div className=" border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Phone: </span> <span className="text-orange-500">{booking?.receiverPhone} </span></div>
                                        <div className=" "><span className=" font-medium text-gray-600">Address: </span> <span className="text-orange-500">{booking?.deliveryAddress} </span></div>
                                    </div>
                                </td>
                                <td>
                                    <div className=" border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Booking:</span> <span className="text-orange-500">{booking?.bookingDate}</span></div>
                                    <div className=" border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Requested Delivery:</span> <span className="text-orange-500">{booking?.requestedDeliveryDate}</span></div>
                                    {
                                        booking?.approximateDeliveryDate &&
                                        <div className=" "><span className=" font-medium text-gray-600">Approximate Delivery:</span> <span className="text-orange-500">01-01-2024</span></div>
                                    }
                                </td>   
                                <td>
                                    <div className=" font-medium text-gray-600  ">{booking?.status}</div>
                                </td>
                                <td>
                                    <button
                                        className={`btn btn-ghost btn-sm text-[12px] bg-green-600 text-white hover:bg-green-600`}>
                                        <FaMapMarkerAlt size={15} color="white" /> 
                                    </button>
                                </td>
                                <th>
                                    <div className="flex  flex-col gap-3">
                                        <button
                                            onClick={() => handleCancelBooking(booking?._id)}
                                            className={`btn btn-ghost text-[12px] btn-sm w-full text-white bg-[#B91C1C]  hover:bg-[#B91C1C] ${booking?.status !== 'on-the-way' ? 'hidden' : ''}`}>
                                            <RxCross1 size={15} color="white" /> Cancel
                                        </button>


                                        <button
                                            onClick={() => handleDeliveredBooking(booking?._id)}
                                            className={`btn btn-ghost text-[12px] btn-sm  w-full bg-orange-600 text-white hover:bg-orange-600 ${booking?.status === 'delivered' ? 'hidden' : ''}`}>
                                            <IoIosCheckbox size={15} color="white" /> Deliver
                                        </button>
                                    </div>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
   </div>
)}
export default MyDeliveryList;