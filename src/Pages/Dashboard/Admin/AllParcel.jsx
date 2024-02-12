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
      <div>
        <Title title="All Parcels " />
        <div className=" mx-auto bg-white px-5 py-10">
          <div className="text-3xl font-bold font-cinzel flex justify-between">
            <h2>Total Parcel: {allBookings?.length}</h2>
          </div>

          {/* Table */}
          <div className="overflow-x-auto my-10 rounded-t-lg shadow">
            <table className="table table-xs  w-full  ">
              {/* head */}
              <thead className="bg-orange-500  h-[50px]   text-white ">
                <tr className="text-base ">
                  <th></th>
                  <th className="">Parcel Sender</th>
                  <th>Dates</th>
                  <th>Delivery man</th>
                  <th>Delivery Cost</th>
                  <th className="">Booking Status</th>
                  <th className="">Actions</th>
                </tr>
              </thead>
              <tbody className="text-[#737373]">
                {allBookings?.map((booking, index) => (
                  <tr key={booking?._id} className="">
                    <th className="text-lg text-center text-black font-bold">
                      {index + 1}
                    </th>
                    <td>
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
                    <td>
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
                    <td>
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
                    <th>
                      <div className=" ">
                        <span className="text-orange-500">
                          {booking?.bookingPrice} Tk.
                        </span>
                      </div>
                    </th>
                    <td>
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
                    <th>
                      <div className="flex  flex-col gap-3">
                        {/* TO DO Delete Canceled Bookinks data */}
                        {/* <button
                                                    className={`btn btn-ghost btn-sm px-5 w-full text-white bg-[#B91C1C]  hover:bg-[#B91C1C] ${booking?.status !== 'pending' ? 'hidden' : ''}`}>
                                                    <RxCross1 size={20} color="white" /> Cancel
                                                </button> */}
                        {booking?.status === "pending" && (
                          <button
                            onClick={() => {
                              setIsShowModal(true);
                              setBookingId(booking?._id);
                            }}
                            className={`btn btn-ghost btn-sm px-5 w-full bg-orange-600 text-white hover:bg-orange-600 `}
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