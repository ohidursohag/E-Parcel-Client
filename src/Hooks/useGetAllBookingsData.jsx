import { useQuery } from "@tanstack/react-query";
import { getAllBookingData } from "../Api/Parcels";


const useGetAllBookingsData = () => {
   const { data: allBookings, refetch, isLoading } = useQuery({
      queryKey: ['all_bookings'],
      queryFn: async () => await getAllBookingData(),
   })
   return { allBookings, refetch, isLoading }
}
export default useGetAllBookingsData;