import { useQuery } from "@tanstack/react-query";
import { getAdminStatisticsData } from "../Api/user";


const useAdminState = () => {
   const { data: adminStatData,isLoading } = useQuery({
      queryKey: ['admin-state'],
      queryFn: async () => await getAdminStatisticsData(),
   })
   return {adminStatData,isLoading}
}
export default useAdminState;