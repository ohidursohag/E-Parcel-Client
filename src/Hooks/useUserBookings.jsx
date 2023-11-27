import { useQuery } from "@tanstack/react-query";
import { getUserBookingsData } from "../Api/Parcels";
import useAuth from "./useAuth";


const useUserBookings = () => {
   const { user } = useAuth();
   const email = user?.email
   const { data: userBookings, refetch,isLoading } = useQuery({
      queryKey: ['user_bookings'],
      queryFn: async () => await getUserBookingsData(email),
   })
   return { userBookings, refetch, isLoading }
}
export default useUserBookings;