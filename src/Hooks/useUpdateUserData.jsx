import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserData } from "../Api/user";


const useUpdateUserData = () => {
   const queryClient = useQueryClient()
   const { mutate:updateUserInfo } = useMutation({
      mutationKey: ['user-data'],
      mutationFn: async ({ id, updatedUserData }) => {
         const updateResponse = await updateUserData(id, updatedUserData);
         return updateResponse
      },
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["all_user"] });
      },
   })

   return { updateUserInfo }
}
export default useUpdateUserData;