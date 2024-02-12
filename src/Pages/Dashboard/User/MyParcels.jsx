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
import ReviewModal from "../../../Components/Modal/ReviewModal";
import { useState } from "react";
import PaymentModal from "../../../Components/Modal/PaymentModal";

const MyParcels = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowPaymentModal, setIsShowPaymentModal] = useState(false);
  const [deliveryManId, setDeliveryManId] = useState("");
  const [bookingData, setBookingData] = useState({});
  // const { updateUserInfo } = useUpdateUserData()
  const { userBookings, isLoading } = useUserBookings();
  const { mutate } = useUpdateBookingsData();

  const handleCancelBooking = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Cancel this Bookings?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const updatedBookingData = {
            status: "canceled",
          };
          mutate({ id, updatedBookingData });
          toast.success("Bookings Canceled");
        } catch (error) {
          toast.error(error.message);
        }
      }
    });
  };

  if (isLoading) {
    return;
  }

  // console.log(userBookings);
  return (
    <div className="container mx-auto px-5 lg:px-10">
      <Title title="My Parcels " />
      <div className="  bg-white ">
        <div className="text-xl lg:text-3xl font-bold  flex justify-between">
          <h2>Total Bookings: {userBookings?.length}</h2>
        </div>

        {/* Table */}
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 mt-1 pb-4 rounded-t-lg overflow-x-auto mb-10">
          <div className="inline-block  min-w-full  rounded-t-lg shadow overflow-hidden ">
            <table className="  min-w-full ">
              {/* head */}
              <thead className="bg-orange-500  h-[50px]  uppercase text-white ">
                <tr className="text-xs lg:text-sm ">
                  <th scope='col' className="min-w-10 px-5 py-2"></th>
                  <th scope='col' className="min-w-[220px] px-3 py-2">Parcel</th>
                  <th scope='col' className="min-w-[280px] px-3 py-2">Delivery Dates</th>
                  <th scope='col' className="min-w-[240px] px-3 py-2">Delivery Man</th>
                  <th scope='col' className="min-w-[160px] px-3 py-2">Booking Status</th>
                  <th scope='col' className="min-w-[160px] px-3 py-2">Payment Status</th>
                  <th scope='col' className="min-w-[160px] px-3 py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="text-[#737373] text-sm lg:text-sm">
                {userBookings?.map((booking, index) => (
                  <tr key={booking?._id} className="even:bg-gray-50">
                    <th className="text-base text-center text-black font-bold min-w-10 px-3 py-2">
                      {index + 1}
                    </th>
                    <td className="min-w-[220px] px-3 py-2">
                      <div className="  ">
                        <div className=" border-b pb-1 border-b-orange-100">
                          <span className=" font-medium text-gray-600">
                            Parcel Type:
                          </span>{" "}
                          <span className="text-orange-500">
                            {booking?.parcelType}
                          </span>
                        </div>
                        <div className=" border-b pb-1 border-b-orange-100">
                          <span className=" font-medium text-gray-600">
                            Parcel Weight:
                          </span>{" "}
                          <span className="text-orange-500">
                            {booking?.parcelWeight} Kg
                          </span>
                        </div>
                        <div className=" pb-1 ">
                          <span className=" font-medium text-gray-600">
                            Delivery Coast:
                          </span>{" "}
                          <span className="text-orange-500">
                            {booking?.bookingPrice} Tk.
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="min-w-[280px] px-3 py-2">
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
                        <div className="  pb-1 ">
                          <span className=" font-medium text-gray-600">
                            Approximate Delivery:
                          </span>{" "}
                          <span className="text-orange-500">01-01-2024</span>
                        </div>
                      )}
                    </td>
                    <td className="min-w-[240px] px-3 py-2">
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
                            <div className=" pb-1 ">
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
                    <td className="min-w-[160px] px-3 py-2 text-center">
                      <div
                        className={`font-medium ${
                          booking?.status === "pending"
                            ? "text-amber-500"
                            : booking?.status === "delivered"
                            ? "text-green-500"
                            : booking?.status === "on-the-way"
                            ? "text-amber-600"
                            : "text-red-500"
                        }`}
                      >
                        {booking?.status}
                      </div>
                    </td>
                    <td className="min-w-[170px] px-3 py-2 text-center">
                      {booking?.PaymentStatus === "paid" ? (
                        <p className="text-green-500 text-base font-bold">
                          Paid
                        </p>
                      ) : (
                        <button
                          onClick={() => {
                            setIsShowPaymentModal(true);
                            setBookingData(booking);
                          }}
                          className={`btn btn-ghost btn-sm px-8  text-white bg-[#d1b254]  hover:bg-[#d1b254] ${
                            booking?.status === "canceled" ? "hidden" : ""
                          }`}
                        >
                          <FaCreditCard size={20} color="white" /> Pay
                        </button>
                      )}
                    </td>
                    <td className="min-w-[160px] px-3 py-2 text-center">
                      <div className="flex  flex-col gap-3">
                        <Link
                          to={`/dashboard/user/update-booking/${booking?._id}`}
                          className={`btn btn-ghost btn-sm px-8  w-max mx-auto text-white  bg-orange-300  hover:bg-orange-300 ${
                            booking?.status !== "pending" ? "hidden" : ""
                          }`}
                        >
                          <FaEdit size={20} color="white" /> Update
                        </Link>

                        <button
                          onClick={() => handleCancelBooking(booking?._id)}
                          className={`btn btn-ghost btn-sm px-8  w-max mx-auto text-white bg-[#B91C1C]  hover:bg-[#B91C1C] ${
                            booking?.status !== "pending" ? "hidden" : ""
                          }`}
                        >
                          <RxCross1 size={20} color="white" /> Cancel
                        </button>

                        <button
                          onClick={() => {
                            setIsShowModal(true);
                            setDeliveryManId(booking?.deliveryManId);
                          }}
                          className={`btn btn-ghost btn-sm px-8  w-max mx-auto bg-orange-600 text-white hover:bg-orange-600 ${
                            booking?.status !== "delivered" ? "hidden" : ""
                          }`}
                        >
                          <GiStarsStack size={20} color="white" /> Review
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ReviewModal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        deliveryManId={deliveryManId}
      />
      <PaymentModal
        isShowPaymentModal={isShowPaymentModal}
        setIsShowPaymentModal={setIsShowPaymentModal}
        bookingData={bookingData}
      />
    </div>
  );
};
export default MyParcels;
