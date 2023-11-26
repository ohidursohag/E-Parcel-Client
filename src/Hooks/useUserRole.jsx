import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { userRole } from "../Api/Auth";


const useUserRole = () => {
   const { user, loading } = useAuth();
   // console.log(user);
   const { data: role, isLoading } = useQuery({
      enabled: !loading && !!user?.email,
      queryKey: ['role', user?.email],
      queryFn: async () => await userRole(user?.email),   
   })
   // console.log(role);
   return {role, isLoading}
}
export default useUserRole;