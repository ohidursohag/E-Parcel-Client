import { useQuery } from "@tanstack/react-query";
import { getBookingDataById } from "../Api/Parcels";


const useGetSingleBookingData = (id) => {
   const { data: bookingData, refetch, isLoading } = useQuery({
      queryKey: ['user_bookings'],
      queryFn: async () => await getBookingDataById(id),

   })
   return { bookingData, refetch, isLoading }
}
export default useGetSingleBookingData;