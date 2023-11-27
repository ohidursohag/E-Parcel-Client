import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import LoadingAnimation from "../Components/Shared/LoadingAnimation/LoadingAnimation";
import useAuth from "../Hooks/useAuth";
import useUserRole from "../Hooks/useUserRole";

const UserRoute = ({ children }) => {
   const { user, loading } = useAuth();
   const { role, isLoading } = useUserRole();


   if (loading || isLoading) {
      return <LoadingAnimation />
   }
   if (user?.email && role === 'user') {
      return children;
   }
   return <Navigate to={`/dashboard/${role}/statistics`} replace={true}></Navigate>;
}
UserRoute.propTypes = {
   children: PropTypes.node.isRequired
}
export default UserRoute;