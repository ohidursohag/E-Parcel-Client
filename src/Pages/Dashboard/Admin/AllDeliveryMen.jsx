// import { RiAdminFill } from "react-icons/ri";
import useGetAllUserData from "../../../Hooks/useGetAllUserData";
// import useUpdateUserData from "../../../Hooks/useUpdateUserData";
// import { TbTruckDelivery } from "react-icons/tb";
import Title from "../../../Components/Shared/Utilities/Title";
import avatar from '../../../assets/image/avatar.webp'
import { FaStar } from "react-icons/fa";
const AllDeliveryMen = () => {
    const role = 'deliveryMan';
    // const { updateUserInfo } = useUpdateUserData();
    const { allUser:allDeliveryMan } = useGetAllUserData({ role })
    console.log(allDeliveryMan);
return(
    <div>
        <Title title="All Delivery Man " />
        <div className=" mx-auto bg-white px-5 py-10">
            <div className="text-3xl font-bold font-cinzel flex justify-between">
                <h2 >Total Users: {allDeliveryMan?.length}</h2>
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
                            <th className="">Delivery Man</th>
                            <th>Total Parcel Delivered</th>
                            <th>Average Review</th>

                            {/* <th className="">Actions</th> */}
                        </tr>
                    </thead>
                    <tbody className="text-[#737373]">
                        {
                            allDeliveryMan?.map((user, index) =>
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
                                        <div className="text-xl text-center  font-medium text-orange-500">{user?.totalParcelDelivered}</div>
                                    </td>
                                    <th>
                                        <div className="text-lg flex gap-2  text-orange-500">{user?.averageRating} <FaStar size={26}/></div>

                                    </th>

                                    {/* <th>
                                        <div className="flex  flex-col gap-3">
                                            <button 
                                                className={`btn btn-ghost btn-sm px-5 w-full bg-lime-500 text-white hover:bg-lime-600 `}>
                                                <RiAdminFill size={20} color="white" /> Make Delivery Man
                                            </button>
                                            <button 
                                                className={`btn btn-ghost btn-sm px-5 w-full bg-orange-600 text-white hover:bg-orange-600 `}>
                                                <TbTruckDelivery size={22} color="white" /> Make Admin
                                            </button>


                                        </div>

                                    </th> */}
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    </div>
)}
export default AllDeliveryMen;