import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
import LoadingAnimation from "../Components/Shared/LoadingAnimation/LoadingAnimation";
const PrivateRoute = ({ children }) => {
   const { user,loading } = useAuth()
   const loc = useLocation()
   if (loading) {
      return <LoadingAnimation/>
   }
   if (!loading && !user?.email) {
      return <Navigate state={loc.pathname} to='/login' replace={true}></Navigate>;
   } 
      return children;
};

PrivateRoute.propTypes = {
   children: PropTypes.node.isRequired
}
export default PrivateRoute;