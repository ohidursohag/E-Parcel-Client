import { useQuery } from "@tanstack/react-query";
import { getAllUserData } from "../Api/user";


const useGetAllUserData = ({role}) => {
   const { data: allUser, refetch, isLoading } = useQuery({
      queryKey: ['all_user',role],
      queryFn: async () => await getAllUserData({role}),
   })
   return { allUser, refetch, isLoading }
}
export default useGetAllUserData;