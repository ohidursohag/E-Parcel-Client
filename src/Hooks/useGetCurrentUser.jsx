import { useQuery } from "@tanstack/react-query";
import { getUserDatabyEmail } from "../Api/user";
import useAuth from "./useAuth";


const useGetCurrentUser = () => {
   const { user } = useAuth()
   const { data: currentUser, isLoading,refetch } = useQuery({
      queryKey: ['currentUser', user?.email],
      queryFn: async () => await getUserDatabyEmail(user?.email),
   })
   return { currentUser, isLoading, refetch }
}
export default useGetCurrentUser;