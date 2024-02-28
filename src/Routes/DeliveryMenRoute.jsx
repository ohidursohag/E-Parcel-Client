import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import LoadingAnimation from "../Components/Shared/LoadingAnimation/LoadingAnimation";


const DeliveryMenRoute = ({ children }) => {
   const { user, loading } = useAuth();
   const { role,isLoading} = useGetCurrentUser()


   if (loading || isLoading) {
      return <LoadingAnimation />
   }
   if (user?.email && role === 'deliveryMan') {
      return children;
   }
   return <Navigate to={`/dashboard/${role}/statistics`} replace={true}></Navigate>;
}
import PropTypes from 'prop-types';
import useGetCurrentUser from "../Hooks/useGetCurrentUser";
DeliveryMenRoute.propTypes = {
    children: PropTypes.node
}
export default DeliveryMenRoute;