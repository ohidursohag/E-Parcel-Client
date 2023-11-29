/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { MdAssignmentAdd } from "react-icons/md";
import { FaRegWindowClose } from "react-icons/fa";
import useUpdateBookingsData from "../../Hooks/useUpdateBookingsData";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
const ManageBookingModal = ({ isShowModal, setIsShowModal, allDeliveryMan, bookingId: id, }) => {
   const { mutate: updateBooking } = useUpdateBookingsData();
   const { register, handleSubmit, formState: { errors } } = useForm()
   console.log(id);
   // Close Modal
   const closeModal = () => {
      setIsShowModal(false);
   };

   const onSubmit = async (data) => {
      // console.log(data);

      Swal.fire({
         title: "Are you sure?",
         text: "want to update this booking",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Confirm"
      }).then(async (result) => {
         if (result.isConfirmed) {
            const toastId = toast.loading('Booking updating...');

            try {
               const deliveryManId = data?.deliveryManId;
               const approximateDeliveryDate = data?.approximateDeliveryDate
               // console.log(deliveryManId, approximateDeliveryDate);
               const selectedDeliveryMan = allDeliveryMan?.find(deliveryMan => deliveryMan?._id === deliveryManId)
               // console.log(selectedDeliveryMan);
               const updatedBookingData = {
                  approximateDeliveryDate,
                  deliveryMan: {
                     id: deliveryManId,
                     name: selectedDeliveryMan?.name,
                     phoneNumber: selectedDeliveryMan?.phoneNumber
                  },
                  status: 'on-the-way',
               }
               console.log(updatedBookingData);
               updateBooking({ id, updatedBookingData });
               toast.success('Successfully updated', { id: toastId });
               
               closeModal();
            } catch (error) {
               toast.error(error.message, { id: toastId })
            }

         }
      })

   }

   return (
      <>
         {
            isShowModal ? (
               <div className=" fixed top-16 left-0 right-0 bottom-10 w-5/12 mx-auto bg-gray-400/70 rounded-xl p-10 backdrop-blur">
                  <div className=" flex flex-col gap-4 m-4">
                     <h1 className="text-4xl font-bold">Breaking News!</h1>

                     <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-full ">
                           <label className="text-xl font-medium ">
                              Catrgory <span className="text-red-500 ">*</span>
                           </label>
                           <select {...register("deliveryManId", { required: true })} className="py-4 w-full mt-3 rounded-[8px] border-orange-300 bg-white px-4  outline-none">
                              <option   >{'Select A Delivery Man'} </option>
                              {
                                 allDeliveryMan?.map((deliveryMan) => <option key={deliveryMan?._id} value={deliveryMan?._id}>Id: {deliveryMan?._id} - {deliveryMan?.name}</option>)
                              }

                           </select>

                        </div>
                        <div className='space-y-1 '>
                           <label className='block text-gray-600 font-medium'>Approximate Delivery Date</label>
                           <input
                              className='w-full px-4 py-3 text-gray-800 border border-orange-300 outline-none rounded-md '
                              {...register('approximateDeliveryDate', { required: true })}
                              type='date'
                              placeholder='Approximate Delivery Date'
                           />
                           {errors.approximateDeliveryDate?.type === 'required' && <p className='text-red-500'>required</p>}
                        </div>
                        <div className="my-10 space-x-10 text-center">
                           <button
                              type="submit"
                              className="btn btn-ghost px-12 text-lg text-white bg-orange-500   mx-auto rounded-lg ">
                              <MdAssignmentAdd size={20} /> Assign
                           </button>
                           <button
                              onClick={closeModal}
                              type="button"
                              className="btn btn-ghost text-lg px-12 text-white bg-red-500   mx-auto rounded-lg">
                              <FaRegWindowClose size={20} /> Close
                           </button>
                        </div>
                     </form>

                  </div>
               </div>
            )
               : ''
         }
      </>
   )
}
export default ManageBookingModal;