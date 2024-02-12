import { GrSettingsOption } from "react-icons/gr";
import Title from "../../../Components/Shared/Utilities/Title";
import useGetAllBookingsData from "../../../Hooks/useGetAllBookingsData";
import useGetAllUserData from "../../../Hooks/useGetAllUserData";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import ManageBookingModal from "../../../Components/Modal/ManageBookingModal";


const AllParcel = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [bookingId, setBookingId] = useState(null);
    const { allBookings } = useGetAllBookingsData({ deliveryManId: '' })
    
    // console.log(allBookings);

    const role = 'deliveryMan';
    const { allUser: allDeliveryMan } = useGetAllUserData({ role })
    const { user } = useAuth()

    return (
      <div className="container mx-auto px-5 lg:px-10">
        <Title title="All Parcels " />
        <div className=" bg-white">
          <div className="text-xl lg:text-3xl font-bold font-cinzel flex justify-between">
            <h2>Total Parcel: {allBookings?.length}</h2>
          </div>

          {/* Table */}
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 mt-1 pb-4 rounded-t-lg overflow-x-auto mb-10">
          <div className="inline-block  min-w-full  rounded-t-lg shadow overflow-hidden">
            <table className="min-w-full">
              {/* head */}
              <thead className="bg-orange-500 h-[50px] uppercase text-white ">
                <tr className="text-xs lg:text-sm">
                  <th scope='col' className="min-w-10 px-5 py-2"></th>
                  <th scope='col' className="min-w-[200px] px-3 py-2">Parcel Sender</th>
                  <th scope='col' className="min-w-[270px] px-3 py-2">Dates</th>
                  <th scope='col' className="min-w-[220px] px-3 py-2">Delivery man</th>
                  <th scope='col' className="min-w-[140px] px-3 py-2">Delivery Cost</th>
                  <th scope='col' className="min-w-[140px] px-3 py-2">Booking Status</th>
                  <th scope='col' className="min-w-[160px] px-3 py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="text-[#737373] text-sm lg:text-sm">
                {allBookings?.map((booking, index) => (
                  <tr key={booking?._id} className="even:bg-gray-50">
                    <th className="text-lg text-center text-black font-bold min-w-10 px-3 py-2">
                      {index + 1}
                    </th>
                    <td className="min-w-[200px] px-3 py-2">
                      <div className="  ">
                        <div className=" border-b pb-1 border-b-orange-100  font-medium text-gray-600">
                          {booking?.senderName}
                        </div>
                        <div className=" border-b pb-1 border-b-orange-100">
                          <span className=" font-medium text-gray-600">
                            Type:{" "}
                          </span>{" "}
                          <span className="text-orange-500">
                            {booking?.parcelType}{" "}
                          </span>
                        </div>
                        <div className=" border-b pb-1 border-b-orange-100">
                          <span className=" font-medium text-gray-600">
                            Phone:{" "}
                          </span>{" "}
                          <span className="text-orange-500">
                            {booking?.senderPhone}{" "}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="min-w-[270px] px-3 py-2">
                      <div className=" border-b pb-1 border-b-orange-100">
                        <span className=" font-medium text-gray-600">
                          Booking:
                        </span>{" "}
                        <span className="text-orange-500">
                          {booking?.bookingDate}
                        </span>
                      </div>
                      <div className=" border-b pb-1 border-b-orange-100">
                        <span className=" font-medium text-gray-600">
                          Requested Delivery:
                        </span>{" "}
                        <span className="text-orange-500">
                          {booking?.requestedDeliveryDate}
                        </span>
                      </div>
                      {booking?.approximateDeliveryDate && (
                        <div className=" border-b pb-1 border-b-orange-100">
                          <span className=" font-medium text-gray-600">
                            Approximate Delivery:
                          </span>{" "}
                          <span className="text-orange-500">01-01-2024</span>
                        </div>
                      )}
                    </td>
                    <td className="min-w-[220px] px-3 py-2">
                      {
                        <div className="  ">
                          {booking?.deliveryManName && (
                            <div className=" border-b pb-1 border-b-orange-100  font-medium text-gray-600">
                              {booking?.deliveryManName}
                            </div>
                          )}
                          {booking?.deliveryManId && (
                            <div className=" border-b pb-1 border-b-orange-100">
                              <span className=" font-medium text-gray-600">
                                Id:{" "}
                              </span>{" "}
                              <span className="text-orange-500">
                                {booking?.deliveryManId}{" "}
                              </span>
                            </div>
                          )}
                          {booking?.deliveryManPhoneNumber && (
                            <div className=" border-b pb-1 border-b-orange-100">
                              <span className=" font-medium text-gray-600">
                                Phone:{" "}
                              </span>{" "}
                              <span className="text-orange-500">
                                {booking?.deliveryManPhoneNumber}{" "}
                              </span>
                            </div>
                          )}
                        </div>
                      }
                    </td>
                    <th className="min-w-[140px] px-3 py-2 text-center">
                      <div className=" ">
                        <span className="text-orange-500">
                          {booking?.bookingPrice} Tk.
                        </span>
                      </div>
                    </th>
                    <td className="min-w-[140px] px-3 py-2 text-center">
                      <div
                        className={`font-medium ${
                          booking?.status === "pending"
                            ? "text-amber-500"
                            : booking?.status === "delivered"
                            ? "text-green-500"
                            : booking?.status === "on-the-way"
                            ? "text-amber-600"
                            : "text-red-400"
                        }`}
                      >
                        {booking?.status}
                      </div>
                    </td>
                    <th className="min-w-[160px] px-3 py-2">
                      <div className="flex  flex-col gap-3">
                        {/* TO DO Delete Canceled Bookinks data */}
                        {/* <button
                                                    className={`btn btn-ghost btn-sm px-8  w-max mx-auto text-white bg-[#B91C1C]  hover:bg-[#B91C1C] ${booking?.status !== 'pending' ? 'hidden' : ''}`}>
                                                    <RxCross1 size={20} color="white" /> Cancel
                                                </button> */}
                        {booking?.status === "pending" && (
                          <button
                            onClick={() => {
                              setIsShowModal(true);
                              setBookingId(booking?._id);
                            }}
                            className={`btn btn-ghost btn-sm px-8  w-max mx-auto bg-orange-600 text-white hover:bg-orange-600 `}
                          >
                            <GrSettingsOption size={20} color="white" /> Manage
                          </button>
                        )}
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </div>

        {/* Modal */}
        <ManageBookingModal
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          user={user}
          allDeliveryMan={allDeliveryMan}
          bookingId={bookingId}
        />
      </div>
    );
}
export default AllParcel;