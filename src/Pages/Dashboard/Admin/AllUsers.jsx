import Title from "../../../Components/Shared/Utilities/Title";
import useGetAllUserData from "../../../Hooks/useGetAllUserData";
import { TbTruckDelivery } from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useUpdateUserData from "../../../Hooks/useUpdateUserData";
import avatar from "../../../assets/image/avatar.webp";
const AllUsers = () => {
  const role = "user";
  const { updateUserInfo } = useUpdateUserData();
  const { allUser, refetch } = useGetAllUserData({ role });
  // console.log(allUser);

  const handleMakeDeliveryMan = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Make this user as Delivery Man`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const toastId = toast.loading("Making Delivery Man...");
        try {
          const updatedUserData = { role: "deliveryMan" };
          updateUserInfo({ id, updatedUserData });
          toast.success("Successfully updated as Delivery Man", {
            id: toastId,
          });
          refetch();
        } catch (error) {
          toast.error(error.message, { id: toastId });
        }
      }
    });
  };
  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Make this user as Admin`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const toastId = toast.loading("Making Admin...");
        try {
          const updatedUserData = { role: "admin" };
          updateUserInfo({ id, updatedUserData });
          toast.success("Successfully updated as Admin", { id: toastId });
          refetch();
        } catch (error) {
          toast.error(error.message, { id: toastId });
        }
      }
    });
  };
  return (
    <div className="container mx-auto px-5 lg:px-10">
      <Title title="All Users " />
      <div className=" bg-white">
        <div className="text-xl lg:text-3xl font-bold font-cinzel flex justify-between">
          <h2>Total Users: {allUser?.length}</h2>
        </div>

        {/* Table */}
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 mt-1 pb-4 rounded-t-lg overflow-x-auto mb-10">
          <div className="inline-block  min-w-full  rounded-t-lg shadow overflow-hidden">
            <table className="min-w-full ">
              {/* head */}
              <thead className="bg-orange-500  h-[50px] uppercase  text-white ">
                <tr className="text-xs lg:text-sm">
                  <th scope="col" className="w-10 px-4 py-2"></th>
                  <th scope="col" className="w-[100px] px-3 py-2">
                    Image
                  </th>
                  <th scope="col" className="min-w-[260px] px-3 py-2">
                    User
                  </th>
                  <th scope="col" className="min-w-[150px] px-3 py-2">
                    Total Bookings
                  </th>
                  <th scope="col" className="min-w-[150px] px-3 py-2">
                    Total Spent
                  </th>

                  <th scope="col" className="min-w-[200px] px-3 py-2">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#737373] text-sm lg:text-sm">
                {allUser?.map((user, index) => (
                  <tr key={user?._id} className="even:bg-gray-50">
                    <th className="text-lg text-center text-black font-bold w-10 px-3 py-2">
                      {index + 1}
                    </th>
                    <td className="w-[80px] px-3 py-2">
                      <div className="  w-[80px]  h-[100px] shadow-xl mx-auto rounded-lg overflow-hidden">
                        <img
                          className="w-full h-full object-cover object-center"
                          src={user?.image || avatar}
                        />
                      </div>
                    </td>
                    <td className="min-w-[260px] px-3 py-2">
                      <div className="  ">
                        <div className=" border-b pb-1 border-b-orange-100  font-medium text-gray-600">
                          {user?.name}
                        </div>
                        <div className=" border-b pb-1 border-b-orange-100">
                          <span className=" font-medium text-gray-600">
                            Email:{" "}
                          </span>{" "}
                          <span className="text-orange-500">
                            {user?.email}{" "}
                          </span>
                        </div>
                        <div className=" pb-1">
                          <span className=" font-medium text-gray-600">
                            Phone:{" "}
                          </span>{" "}
                          <span className="text-orange-500">
                            {user?.phoneNumber}{" "}
                          </span>
                        </div>
                      </div>
                    </td>

                    
                    <td className="min-w-[150px] px-3 py-2 text-center">
                      <div className="text-lg  font-medium text-orange-500">
                        {user?.totalParcelBooked}
                      </div>
                    </td>
                    <th className="min-w-[150px] px-3 py-2 text-center">
                      <div className="text-lg  text-orange-500">
                        {user?.totalSpentAmount} Tk.
                      </div>
                    </th>
                    <th className="min-w-[200px] px-3 py-2 ">
                      <div className="flex  flex-col gap-3">
                        <button
                          onClick={() => handleMakeDeliveryMan(user?._id)}
                          className={`btn btn-ghost btn-sm px-5 w-[200px] mx-auto bg-lime-500 text-white hover:bg-lime-600 `}>
                          <RiAdminFill size={20} color="white" /> Make Delivery
                          Man
                        </button>
                        <button
                          onClick={() => handleMakeAdmin(user?._id)}
                          className={`btn btn-ghost btn-sm px-5 w-[200px] mx-auto bg-orange-600 text-white hover:bg-orange-600 `}>
                          <TbTruckDelivery size={22} color="white" /> Make Admin
                        </button>
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllUsers;
