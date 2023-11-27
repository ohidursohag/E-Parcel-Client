import { FaEdit } from "react-icons/fa";
import Title from "../../../Components/Shared/Utilities/Title";
import { RxCross1 } from "react-icons/rx";
import { GiStarsStack } from "react-icons/gi";
import { FaCreditCard } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useUserBookings from "../../../Hooks/useUserBookings";
import useUpdateBookingsData from "../../../Hooks/useUpdateBookingsData";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const MyParcels = () => {

    const { userBookings, isLoading } = useUserBookings()
    const { mutate } = useUpdateBookingsData();
    if (isLoading) {
        return ;
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
                       status: "canceled"
                   }
                    mutate({ id, updatedBookingData })
                   toast.success('Bookings Canceled')

               } catch (error) {
                toast.error(error.message)
               }
            }
        })
       
    }
    // console.log(userBookings);
    return (
        <div>
            <Title title="My Parcels " />
            <div className=" mx-auto bg-white px-5 py-10">
                <div className="text-3xl font-bold font-cinzel flex justify-between">
                    <h2 >Total Bookings: {userBookings?.length}</h2>
                </div>

                {/* Table */}
                <div className="overflow-x-auto my-10 rounded-t-lg shadow">
                    <table className="table table-sm  w-full  ">
                        {/* head */}
                        <thead className="bg-orange-500  h-[50px] text-base  text-white ">
                            <tr className=" ">
                                <th>
                                </th>
                                <th className="">Parcel</th>
                                <th>Delivery Dates</th>
                                <th>Delivery Man</th>
                                <th className="w-[100px]">Booking Status</th>
                                <th className="w-[150px]">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#737373]">
                            {
                                userBookings?.map((booking, index) => <tr key={booking?._id} className="">
                                    <th className="text-lg text-center text-black font-bold">{index + 1}</th>
                                    <td>
                                        <div className="  ">
                                            <div className="text-base border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Parcel Type:</span> <span className="text-orange-500">{booking?.parcelType}</span></div>
                                            <div className="text-base border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Parcel Weight:</span> <span className="text-orange-500">{booking?.parcelWeight} Kg</span></div>
                                            <div className="text-base border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Delivery Coast:</span> <span className="text-orange-500">{booking?.bookingPrice} Tk.</span></div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="text-base border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Booking:</span> <span className="text-orange-500">{booking?.bookingDate}</span></div>
                                        <div className="text-base border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Requested Delivery:</span> <span className="text-orange-500">{booking?.requestedDeliveryDate}</span></div>
                                        {
                                            booking?.approximateDeliveryDate &&
                                            <div className="text-base border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Approximate Delivery:</span> <span className="text-orange-500">01-01-2024</span></div>
                                        }
                                    </td>
                                    <td>
                                        {
                                            booking?.deliveryman && <div>
                                                <div className=" font-medium text-gray-600 border-b pb-1 border-b-orange-100">{booking?.deliveryman?.name}</div>
                                                <div className="text-base border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Id:</span> <span className="text-orange-500">{booking?.deliveryman?.id}</span></div>
                                            </div>
                                        }

                                    </td>
                                    <td>
                                        <div className=" font-medium text-gray-600 text-base ">{booking?.status}</div>
                                    </td>
                                    <th>
                                        <div className="flex  flex-col gap-3">
                                            <Link to={`/dashboard/user/update-booking/${booking?._id}`}
                                                className={`btn btn-ghost btn-sm px-5 text-white w-full bg-orange-300  hover:bg-orange-300 ${booking?.status !== 'pending' ? 'hidden' : ''}`}>
                                                <FaEdit size={20} color="white" /> Update
                                            </Link>

                                            <button onClick={() => handleCancelBooking(booking?._id)}
                                                className={`btn btn-ghost btn-sm px-5 w-full text-white bg-[#B91C1C]  hover:bg-[#B91C1C] ${booking?.status !== 'pending' ? 'hidden' : ''}`}>
                                                <RxCross1 size={20} color="white" /> Cancel
                                            </button>


                                            <button
                                                className={`btn btn-ghost btn-sm px-5 w-full bg-orange-600 text-white hover:bg-orange-600 ${booking?.status !== 'delivered' ? 'hidden' : ''}`}>
                                                <GiStarsStack size={20} color="white" /> Review
                                            </button>

                                            <button
                                                className={`btn btn-ghost btn-sm px-5 w-full text-white bg-[#d1b254]  hover:bg-[#d1b254] ${booking?.status === 'canceled' ? 'hidden' : ''}`}>
                                                <FaCreditCard size={20} color="white" /> Pay
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
    )
}
export default MyParcels;