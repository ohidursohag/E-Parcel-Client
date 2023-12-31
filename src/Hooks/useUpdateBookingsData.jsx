import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBookingData } from "../Api/Parcels";


const useUpdateBookingsData = () => {
   const queryClient = useQueryClient()
   const { mutate } = useMutation({
      mutationKey: ['user_bookings'],
      mutationFn: async ({ id, updatedBookingData }) => {
         const updateResponse = await updateBookingData(id, updatedBookingData);
         return updateResponse
      },
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["all_bookings"] });        
      },
   })
   return {mutate}
}
export default useUpdateBookingsData;