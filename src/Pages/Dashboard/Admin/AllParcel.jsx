import { GrSettingsOption } from "react-icons/gr";
import Title from "../../../Components/Shared/Utilities/Title";
import useGetAllBookingsData from "../../../Hooks/useGetAllBookingsData";


const AllParcel = () => {
    const { allBookings } = useGetAllBookingsData()
    console.log(allBookings);
    return (
        <div>
            <Title title="All Parcels " />
            <div className=" mx-auto bg-white px-5 py-10">
                <div className="text-3xl font-bold font-cinzel flex justify-between">
                    <h2 >Total Parcel: {allBookings?.length}</h2>
                </div>

                {/* Table */}
                <div className="overflow-x-auto my-10 rounded-t-lg shadow">
                    <table className="table table-sm  w-full  ">
                        {/* head */}
                        <thead className="bg-orange-500  h-[50px] text-base  text-white ">
                            <tr className=" ">
                                <th>
                                </th>
                                <th className="">Parcel Sender</th>
                                <th>Dates</th>
                                <th>Delivery Cost</th>
                                <th className="w-[100px]">Booking Status</th>
                                <th className="w-[150px]">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#737373]">
                            {
                                allBookings?.map((booking, index) =>
                                    <tr key={booking?._id} className="">
                                        <th className="text-lg text-center text-black font-bold">{index + 1}</th>
                                        <td>
                                            <div className="  ">
                                                <div className="text-base border-b pb-1 border-b-orange-100  font-medium text-gray-600">{booking?.senderName}</div>
                                                <div className="text-base border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Phone: </span> <span className="text-orange-500">{booking?.senderPhone} </span></div>
                                                
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
                                        <th>
                                            <div className="text-base "><span className="text-orange-500">{booking?.bookingPrice} Tk.</span></div>

                                        </th>
                                        <td>
                                            <div className=" font-medium text-gray-600 text-base ">{booking?.status}</div>
                                        </td>
                                        <th>
                                            <div className="flex  flex-col gap-3">
                                                
                                                {/* TO DO Delete Canceled Bookinks data */}
                                                {/* <button
                                                    className={`btn btn-ghost btn-sm px-5 w-full text-white bg-[#B91C1C]  hover:bg-[#B91C1C] ${booking?.status !== 'pending' ? 'hidden' : ''}`}>
                                                    <RxCross1 size={20} color="white" /> Cancel
                                                </button> */}


                                                <button
                                                    className={`btn btn-ghost btn-sm px-5 w-full bg-orange-600 text-white hover:bg-orange-600 `}>
                                                    <GrSettingsOption size={20} color="white" /> Manage
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
export default AllParcel;