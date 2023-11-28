import Title from "../../../Components/Shared/Utilities/Title";
import useGetAllUserData from "../../../Hooks/useGetAllUserData";
import { TbTruckDelivery } from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useUpdateUserData from "../../../Hooks/useUpdateUserData";
import avatar from '../../../assets/image/avatar.webp'
const AllUsers = () => {
    const role = 'user';
    const { updateUserInfo } = useUpdateUserData();
    const { allUser, refetch } = useGetAllUserData({ role })
    // console.log(allUser);

    const handleMakeDeliveryMan = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Make this user as Delivery Man`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const toastId = toast.loading('Making Delivery Man...');
                try {
                    const updatedUserData = { role: 'deliveryMan' }
                    updateUserInfo({ id, updatedUserData })
                    toast.success('Successfully updated as Delivery Man',{id:toastId});
                    refetch()
                } catch (error) {
                    toast.error(error.message, {id:toastId})
                }


            }
        })
     }
    const handleMakeAdmin = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Make this user as Admin`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const toastId = toast.loading('Making Admin...');
                try {
                    const updatedUserData = { role: 'admin' }
                    updateUserInfo({ id, updatedUserData })
                    toast.success('Successfully updated as Admin', { id: toastId });
                    refetch()
                } catch (error) {
                    toast.error(error.message, { id: toastId })
                }


            }
        })
     }
    return (
        <div>
            <Title title="All Users " />
            <div className=" mx-auto bg-white px-5 py-10">
                <div className="text-3xl font-bold font-cinzel flex justify-between">
                    <h2 >Total Users: {allUser?.length}</h2>
                </div>

                {/* Table */}
                <div className="overflow-x-auto my-10 rounded-t-lg shadow">
                    <table className="table table-sm  w-full  ">
                        {/* head */}
                        <thead className="bg-orange-500  h-[50px] text-base  text-white ">
                            <tr className=" ">
                                <th>
                                </th>
                                <th className="w-[120px]">Image</th>
                                <th className="">User</th>
                                <th>Total Bookings</th>
                                <th>Total Spent</th>
                                
                                <th className="">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#737373]">
                            {
                                allUser?.map((user, index) =>
                                    <tr key={user?._id} className="">
                                        <th className="text-lg text-center text-black font-bold">{index + 1}</th>
                                        <td>
                                            <div className="">
                                                <div className=" shadow-xl rounded-lg overflow-hidden">
                                                    <div className="  w-full  h-[100px]">
                                                        <img className="w-full h-full object-cover object-center" src={user?.image || avatar} />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="  ">
                                                <div className="text-base border-b pb-1 border-b-orange-100  font-medium text-gray-600">{user?.name}</div>
                                                <div className="text-base border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Email: </span> <span className="text-orange-500">{user?.email} </span></div>
                                                <div className="text-base border-b pb-1 border-b-orange-100"><span className=" font-medium text-gray-600">Phone: </span> <span className="text-orange-500">{user?.phoneNumber} </span></div>

                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-lg  font-medium text-orange-500">{user?.totalParcelBooked}</div>
                                        </td>
                                        <th>
                                            <div className="text-lg  text-orange-500">{user?.totalSpentAmount} Tk.</div>

                                        </th>
                                        
                                        <th>
                                            <div className="flex  flex-col gap-3">
                                                <button onClick={() => handleMakeDeliveryMan(user?._id)}
                                                    className={`btn btn-ghost btn-sm px-5 w-full bg-lime-500 text-white hover:bg-lime-600 `}>
                                                    <RiAdminFill size={20} color="white" /> Make Delivery Man
                                                </button>
                                                <button onClick={() => handleMakeAdmin(user?._id)}
                                                    className={`btn btn-ghost btn-sm px-5 w-full bg-orange-600 text-white hover:bg-orange-600 `}>
                                                    <TbTruckDelivery size={22} color="white" /> Make Admin
                                                </button>


                                            </div>

                                        </th>
                                    </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default AllUsers;