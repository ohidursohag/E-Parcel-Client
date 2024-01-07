import { useEffect, useState } from "react";
import Title from "../../../Components/Shared/Utilities/Title";
import useAuth from "../../../Hooks/useAuth";
import { getUserPaymentHistory } from "../../../Api/payments";


const PaymentHistory = () => {
   const { user } = useAuth();
   const [paymentHistoryData, setPaymentHistoryData] = useState([])
   
   useEffect(() => {
      getUserPaymentHistory(user?.email)
         .then(data => {
         console.log(data);
            setPaymentHistoryData(data);
      }).catch(error => console.log(error.message))
   }, [user?.email])

return(
   <div>
      <Title title="Payment History" />
      {
         paymentHistoryData?.length 
            ? <div className=" mx-auto bg-white px-5 py-10">
               <div className="text-3xl font-bold font-cinzel flex justify-between">
                  <h2 >Total Payment: {paymentHistoryData?.length}</h2>
               </div>

               {/* Table */}
               <div className="overflow-x-auto my-10 rounded-t-lg shadow">
                  <table className="table table-xs  w-full  ">
                     {/* head */}
                     <thead className="bg-orange-500  h-[50px]   text-white ">
                        <tr className=" ">
                           <th>
                           </th>
                           <th className="">Parcel</th>
                           <th>Receiver</th>
                           <th>Transaction Id</th>
                           <th className="">Payment Date</th>
                           <th className="">Paid Amount</th>
                           <th className="">Booking Status</th>
                        </tr>
                     </thead>
                     <tbody className="text-[#737373]">
                        {
                           paymentHistoryData?.map((paymentData, index) => <tr key={paymentData?._id} className="">
                              <th className="text-lg text-center text-black font-bold">{index + 1}</th>
                              <td>
                                 <div className="  ">
                                    <div className=" border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Parcel Type:</span> <span className="text-orange-500">{paymentData?.parcelType}</span></div>
                                    <div className=" border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Boooking Date:</span> <span className="text-orange-500">{paymentData?.bookingDate} </span></div>
                                    <div className=" border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Delivery Coast:</span> <span className="text-orange-500">{paymentData?.paidAmount} Tk.</span></div>
                                 </div>
                              </td>
                              <td>
                                 <div className=" border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Name:</span> <span className="text-orange-500">{paymentData?.receiverName}</span></div>
                                 <div className=" border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Phone:</span> <span className="text-orange-500">{paymentData?.receiverPhone}</span></div>

                              </td>
                              <td>
                                 <div className="  text-gray-600  ">{paymentData?.transactionId}</div>

                              </td>
                              <td>
                                 <div className=" font-medium text-gray-600  ">{paymentData?.paymentDate}</div>
                              </td>
                              <td className="text-center">

                                 <div className=" font-medium text-gray-600  ">{paymentData?.paidAmount} Tk.</div>
                              </td>
                              <th>
                                 <div className=" font-medium text-gray-600  ">{paymentData?.bookingStatus}</div>
                              </th>
                           </tr>)
                        }
                     </tbody>
                  </table>
               </div>
            </div>
            : <div className="h-[calc(100vh-195px)] flex justify-center items-center">
               <p className="text-2xl font-bold">{`You did't make any Payment yet`}</p>
            </div>
      }
   </div>
)}
export default PaymentHistory;