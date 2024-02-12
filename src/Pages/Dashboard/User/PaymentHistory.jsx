import { useEffect, useState } from "react";
import Title from "../../../Components/Shared/Utilities/Title";
import useAuth from "../../../Hooks/useAuth";
import { getUserPaymentHistory } from "../../../Api/payments";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [paymentHistoryData, setPaymentHistoryData] = useState([]);

  useEffect(() => {
    getUserPaymentHistory(user?.email)
      .then((data) => {
        // console.log(data);
        setPaymentHistoryData(data);
      })
      .catch((error) => console.log(error.message));
  }, [user?.email]);

  return (
    <div className="container mx-auto  px-5 lg:px-10">
      <Title title="Payment History" />
      {paymentHistoryData?.length ? (
        <div className=" bg-white ">
          <div className="text-xl lg:text-3xl font-bold  flex justify-between">
            <h2>Total Payment: {paymentHistoryData?.length}</h2>
          </div>

          {/* Table */}
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-2 overflow-x-auto rounded-t-lg">
            <div className="inline-block  min-w-full  my-2 lg:my-5 rounded-t-lg shadow overflow-hidden">
              <table className="min-w-full">
                {/* head */}
                <thead className="bg-orange-500  h-[50px]  text-white ">
                  <tr className="text-center uppercase text-xs lg:text-sm">
                    <th scope='col' className="min-w-10 px-3 py-2"></th>
                    <th scope='col' className="min-w-[180px] px-3 py-2">Parcel</th>
                    <th scope='col' className="min-w-[160px] px-3 py-2">Receiver</th>
                    <th scope='col' className="min-w-[200px] px-3 py-2">Transaction Id</th>
                    <th scope='col' className="min-w-[150px] px-3 py-2">Payment Date</th>
                    <th scope='col' className="min-w-[150px] px-3 py-2">Paid Amount</th>
                    <th scope='col' className="min-w-[150px] px-3 py-2">Booking Status</th>
                  </tr>
                </thead>
                <tbody className="text-[#737373] text-xs lg:text-sm">
                  {paymentHistoryData?.map((paymentData, index) => (
                    <tr key={paymentData?._id} className="even:bg-gray-100">
                      <th className="text-base text-center text-black font-bold min-w-10 px-3 py-2">
                        {index + 1}
                      </th>
                      <td className="min-w-[200px] px-3 py-2">
                        <div className="  ">
                          <div className=" border-b pb-1 border-b-orange-100">
                            <span className=" font-medium text-gray-600">
                              Parcel Type:
                            </span>{" "}
                            <span className="text-orange-500">
                              {paymentData?.parcelType}
                            </span>
                          </div>
                          <div className=" border-b pb-1 border-b-orange-100">
                            <span className=" font-medium text-gray-600">
                              Boooking Date:
                            </span>{" "}
                            <span className="text-orange-500">
                              {paymentData?.bookingDate}{" "}
                            </span>
                          </div>
                          <div className=" pb-1 ">
                            <span className=" font-medium text-gray-600">
                              Delivery Coast:
                            </span>{" "}
                            <span className="text-orange-500">
                              {paymentData?.paidAmount} Tk.
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="min-w-[160px] px-3 py-2">
                        <div className=" border-b pb-1 border-b-orange-100">
                          <span className=" font-medium text-gray-600">
                            Name:
                          </span>{" "}
                          <span className="text-orange-500">
                            {paymentData?.receiverName}
                          </span>
                        </div>
                        <div className=" pb-1 ">
                          <span className=" font-medium text-gray-600">
                            Phone:
                          </span>{" "}
                          <span className="text-orange-500">
                            {paymentData?.receiverPhone}
                          </span>
                        </div>
                      </td>
                      <td className="min-w-[200px] px-3 py-2 text-center">
                        <div className="  text-gray-600  ">
                          {paymentData?.transactionId}
                        </div>
                      </td>
                      <td className="min-w-[150px] px-3 py-2 text-center">
                        <div className=" font-medium text-gray-600  ">
                          {paymentData?.paymentDate}
                        </div>
                      </td>
                      <td className="text-center min-w-[150px] px-3 py-2">
                        <div className=" font-medium text-gray-600  ">
                          {paymentData?.paidAmount} Tk.
                        </div>
                      </td>
                      <td className="text-center min-w-[150px] px-3 py-2">
                        <div
                          className={`font-medium ${
                            paymentData?.bookingStatus === "pending"
                              ? "text-amber-500"
                              : paymentData?.bookingStatus === "delivered"
                              ? "text-green-500"
                              : paymentData?.bookingStatus === "on-the-way"
                              ? "text-amber-600"
                              : "text-red-500"
                          }`}
                        >
                          {paymentData?.bookingStatus}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[calc(100vh-195px)] flex justify-center items-center">
          <p className="text-2xl font-bold">{`You did't make any Payment yet`}</p>
        </div>
      )}
    </div>
  );
};
export default PaymentHistory;
