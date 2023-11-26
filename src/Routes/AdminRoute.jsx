
import { Navigate } from "react-router-dom";
import PropTypes  from "prop-types";
import LoadingAnimation from "../Components/Shared/LoadingAnimation/LoadingAnimation";
import useAuth from "../Hooks/useAuth";
import useUserRole from "../Hooks/useUserRole";

const AdminRoute = ({children}) => {
   const { user, loading } = useAuth();
   const { role, isLoading } = useUserRole();
   

   if (loading || isLoading) {
      return <LoadingAnimation/>
   }
   if (user?.email && role === 'admin') {
      return children;
   }
   return <Navigate to={`/dashboard/${role}/statistics`} replace={true}></Navigate>;
}

AdminRoute.propTypes = {
   children: PropTypes.node.isRequired
}
export default AdminRoute;