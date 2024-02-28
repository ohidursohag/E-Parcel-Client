import { useQuery } from "@tanstack/react-query";
import { getUserDatabyEmail } from "../Api/user";
import useAuth from "./useAuth";


const useGetCurrentUser = () => {
   const { user,loading } = useAuth()
   const { data: currentUser, isLoading,refetch } = useQuery({
      enabled: !loading && !!user?.email,
      queryKey: ['currentUser', user?.email],
      queryFn: async () => await getUserDatabyEmail(user?.email),
   })
   const role = currentUser?.role
   return { currentUser,role, isLoading, refetch }
}
export default useGetCurrentUser;