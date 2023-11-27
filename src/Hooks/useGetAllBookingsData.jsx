import { useQuery } from "@tanstack/react-query";
import { getAllBookingData } from "../Api/Parcels";


const useGetAllBookingsData = () => {
   // console.log('Hook e paice');
   const { data: allBookings, refetch, isLoading } = useQuery({
      queryKey: ['all_bookings'],
      queryFn: async () => await getAllBookingData(),
   })
   return { allBookings, refetch, isLoading }
}
export default useGetAllBookingsData;