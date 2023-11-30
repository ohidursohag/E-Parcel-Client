import { useQuery } from "@tanstack/react-query";
import { getAllBookingData } from "../Api/Parcels";


const useGetAllBookingsData = ({deliveryManId=''}) => {
   // console.log(deliveryManId);
   const { data: allBookings, refetch, isLoading } = useQuery({
      
      queryKey: ['all_bookings', deliveryManId],
      queryFn: async () => await getAllBookingData({deliveryManId} ),
   })
   return { allBookings, refetch, isLoading }
}
export default useGetAllBookingsData;