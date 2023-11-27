import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import {  useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
// import { useEffect } from "react";
// import useGetSingleBookingData from "../../Hooks/useGetSingleBookingData";
import {  getBookingDataById } from "../../Api/Parcels";
import { useParams } from "react-router-dom";
import useUpdateBookingsData from "../../Hooks/useUpdateBookingsData";

const UpdateBookingsDataForm = () => {
   const [bookingPrice, setBookingPrice] = useState(0)
   // const [parcelData, setParcelData] = useState({})
   const { user } = useAuth()
   const { id } = useParams()
   const {mutate } = useUpdateBookingsData()
   // const { bookingData, refetch } = useGetSingleBookingData(id)
   // useEffect( () => {
   //    setParcelData(bookingData)
   // }, [bookingData])
   // console.log(parcelData);
   const { handleSubmit, register, formState: { errors } } = useForm({

      // defaultValues: parcelData 
      defaultValues: async () => await getBookingDataById(id)

   })

   // console.log(bookingData);

   // // Boooking Date
   // const bookingDate = new Date().toLocaleDateString().split('/').join('-');
   // console.log(bookingDate);
   const getBookingPrice = (e) => {
      const parcelWeight = Number(e.target.value)
      // console.log(parcelWeight);
      if (parcelWeight === 1) {
         setBookingPrice(50);
      } else if (parcelWeight > 1 && parcelWeight <= 2) {
         setBookingPrice(100);
      } else if (parcelWeight > 2) {
         setBookingPrice(150);
      } else {
         setBookingPrice(0);
      }
   }
   const onSubmit = (data) => {
      // console.log(data);
      // console.log(Object.keys(data));
      Swal.fire({
         title: "Are you sure?",
         text: "You want to Update this Bookings",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Confirm"
      }).then(async (result) => {
         if (result.isConfirmed) {
            const toastId = toast.loading('Update processing...');
            const updatedBookingData = {
               senderName: data.senderName,
               senderEmail: data.senderEmail,
               senderPhone: data.senderPhone,
               parcelType: data.parcelType,
               receiverName: data.receiverName,
               parcelWeight: data.parcelWeight,
               receiverPhone: data.receiverPhone,
               requestedDeliveryDate: data.requestedDeliveryDate,
               deliveryAddress: data.deliveryAddress,
               latitude: data.latitude,
               longitude: data.longitude,
               status: 'pending',
               bookingPrice,
               // bookingDate
            }
            try {
               mutate({ id, updatedBookingData })
               toast.success('successfully Updated', { id: toastId });
            } catch (error) {
               toast.error(error.message, { id: toastId })
            }
            // console.log(bookingData);
         }

      })


      const bookingData = {
         senderName: data.senderName,
         senderEmail: data.senderEmail,
         senderPhone: data.senderPhone,
         parcelType: data.parcelType,
         receiverName: data.receiverName,
         parcelWeight: data.parcelWeight,
         receiverPhone: data.receiverPhone,
         requestedDeliveryDate: data.requestedDeliveryDate,
         deliveryAddress: data.deliveryAddress,
         latitude: data.latitude,
         longitude: data.longitude,
         bookingPrice,
      }
      console.log(bookingData);
   }
   return (
      <>
         <form onSubmit={handleSubmit(onSubmit)}
            className="space-y-5">
            {/* sender name,email */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
               <div className='space-y-1 '>
                  <label className='block text-gray-600 font-medium'>
                     Sender Name
                  </label>
                  <input
                     className='w-full px-4 py-3 text-gray-800 border border-orange-300 outline-none rounded-md '
                     value={user?.displayName}
                     {...register('senderName', { required: true })}
                     readOnly
                     type='text'
                     placeholder='Sender Name'
                  />
               </div>
               <div className='space-y-1 '>
                  <label className='block text-gray-600 font-medium'>
                     Sender Email
                  </label>
                  <input
                     className='w-full px-4 py-3 text-gray-800 border border-orange-300 outline-none rounded-md '
                     value={user?.email}
                     {...register('senderEmail', { required: true })}
                     readOnly
                     type='email'
                     placeholder='Sender Name'

                  />
               </div>
            </div>
            {/*  Sender Phone, parcel Type */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
               <div className='space-y-1 '>
                  <label className='block text-gray-600 font-medium'>
                     Sender Phone Number
                  </label>
                  <input
                     className='w-full px-4 py-3 text-gray-800 border border-orange-300 outline-none rounded-md '
                     {...register('senderPhone', { required: true })}
                     type='phone'
                     placeholder='Sender Phone Number'
                  />
                  {errors.senderPhone?.type === 'required' && <p className='text-red-500'>required</p>}
               </div>
               <div className='space-y-1 '>
                  <label className='block text-gray-600 font-medium'>
                     Parcel Type
                  </label>
                  <input
                     className='w-full px-4 py-3 text-gray-800 border border-orange-300 outline-none rounded-md '
                     {...register('parcelType', { required: true })}
                     type='text'
                     placeholder='Percel Type'
                  />
                  {errors.parcelType?.type === 'required' && <p className='text-red-500'>required</p>}
               </div>
            </div>
            {/* parcel-weight ,receiver name */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
               <div className='space-y-1 '>
                  <label className='block text-gray-600 font-medium'>Receiver Name</label>
                  <input
                     className='w-full px-4 py-3 text-gray-800 border border-orange-300 outline-none rounded-md '
                     {...register('receiverName', { required: true })}
                     type='text'
                     placeholder='Receiver Name'
                  />
                  {errors.receiverName?.type === 'required' && <p className='text-red-500'>required</p>}
               </div>
               <div className='space-y-1 '>
                  <label className='block text-gray-600 font-medium'>Parcel Weight (Kg)</label>
                  <input
                     className='w-full px-4 py-3 text-gray-800 border border-orange-300 outline-none rounded-md '
                     {...register('parcelWeight', { required: true, onChange: (e) => getBookingPrice(e) })}
                     type='number'
                     step={0.5}
                     min={1}
                     placeholder='Parcel Weight (in Kg)'
                  />
                  {errors.parcelWeight?.type === 'required' && <p className='text-red-500'>required</p>}
               </div>
            </div>
            {/* receiver phone, Requested delivery date */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
               <div className='space-y-1 '>
                  <label className='block text-gray-600 font-medium'>Receiver Phone Number</label>
                  <input
                     className='w-full px-4 py-3 text-gray-800 border border-orange-300 outline-none rounded-md '
                     {...register('receiverPhone', { required: true })}
                     type='phone'
                     placeholder='Receiver Phone Number'
                  />
                  {errors.receiverPhone?.type === 'required' && <p className='text-red-500'>required</p>}
               </div>
               <div className='space-y-1 '>
                  <label className='block text-gray-600 font-medium'>Requested Delivery Date</label>
                  <input
                     className='w-full px-4 py-3 text-gray-800 border border-orange-300 outline-none rounded-md '
                     {...register('requestedDeliveryDate', { required: true })}
                     type='date'
                     placeholder='Requested Delivery Date'
                  />
                  {errors.requestedDeliveryDate?.type === 'required' && <p className='text-red-500'>required</p>}
               </div>
            </div>
            {/* delivery Address, Latitude, Longitude */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
               <div className='space-y-1 '>
                  <label className='block text-gray-600 font-medium'>Parcel Delivery Address</label>
                  <input
                     className='w-full px-4 py-3 text-gray-800 border border-orange-300 outline-none rounded-md '
                     {...register('deliveryAddress', { required: true })}
                     type='text'
                     placeholder='Parcel Delivery Address'
                  />
                  {errors.deliveryAddress?.type === 'required' && <p className='text-red-500'>required</p>}
               </div>

               <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                  <div className='space-y-1 '>
                     <label className='block text-gray-600 font-medium'>Delivery Address Latitude</label>
                     <input
                        className='w-full px-4 py-3 text-gray-800 border border-orange-300 outline-none rounded-md '
                        {...register('latitude', { required: true })}
                        type='text'
                        placeholder='Delivery Address Latitude'
                     />
                     {errors.latitude?.type === 'required' && <p className='text-red-500'>required</p>}
                  </div>

                  <div className='space-y-1 '>
                     <label className='block text-gray-600 font-medium'>Delivery Address Longitude</label>
                     <input
                        className='w-full px-4 py-3 text-gray-800 border border-orange-300 outline-none rounded-md '
                        {...register('longitude', { required: true })}
                        type='text'
                        placeholder='Delivery Address Longitude'
                     />
                     {errors.longitude?.type === 'required' && <p className='text-red-500'>required</p>}
                  </div>

               </div>

            </div>
            {/* Price, book button */}
            <div className="flex justify-between  items-center ">
               <input type="submit" value="Book" className="btn px-10 text-lg bg-orange-500 text-white hover:bg-orange-700" />
               <div className="text-xl font-semibold">Price: TK.<span className="text-orange-500 text-3xl">{bookingPrice || '00'}</span></div>
            </div>

         </form>
      </>
   )
}
export default UpdateBookingsDataForm;