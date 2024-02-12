// import { RiAdminFill } from "react-icons/ri";
import useGetAllUserData from "../../../Hooks/useGetAllUserData";
// import useUpdateUserData from "../../../Hooks/useUpdateUserData";
// import { TbTruckDelivery } from "react-icons/tb";
import Title from "../../../Components/Shared/Utilities/Title";
import avatar from "../../../assets/image/avatar.webp";
import { FaStar } from "react-icons/fa";
const AllDeliveryMen = () => {
  const role = "deliveryMan";
  // const { updateUserInfo } = useUpdateUserData();
  const { allUser: allDeliveryMan } = useGetAllUserData({ role });
//   console.log(allDeliveryMan);
  return (
    <div className="container mx-auto px-5 lg:px-10">
      <Title title="All Delivery Man " />
      <div className="  bg-white">
        <div className="text-xl lg:text-3xl font-bold font-cinzel flex justify-between">
          <h2>Total Users: {allDeliveryMan?.length}</h2>
        </div>

        {/* Table */}
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 mt-1 pb-4 rounded-t-lg overflow-x-auto mb-10">
          <div className="inline-block  min-w-full  rounded-t-lg shadow overflow-hidden ">
            <table className="min-w-full">
              {/* head */}
              <thead className="bg-orange-500  h-[50px]  uppercase text-white  ">
                <tr className=" text-xs lg:text-sm">
                  <th scope="col" className="w-10 px-4 py-2"></th>
                  <th scope="col" className="w-[100px] px-3 py-2">
                    Image
                  </th>
                  <th scope="col" className="min-w-[240px] px-3 py-2">
                    Delivery Man
                  </th>
                  <th scope="col" className="min-w-[180px] px-3 py-2">
                    Total Parcel Delivered
                  </th>
                  <th scope="col" className="min-w-[180px] px-3 py-2">
                    Average Review
                  </th>

                  {/* <th className="">Actions</th> */}
                </tr>
              </thead>
              <tbody className="text-[#737373] text-sm lg:text-sm">
                {allDeliveryMan?.map((user, index) => (
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
                    <td className="w-[240px] px-3 py-2">
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
                        <div className="  ">
                          <span className=" font-medium text-gray-600">
                            Phone:{" "}
                          </span>{" "}
                          <span className="text-orange-500">
                            {user?.phoneNumber}{" "}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="w-[180px] px-3 py-2 text-center">
                      <div className="text-xl   font-medium text-orange-500">
                        {user?.totalParcelDelivered}
                      </div>
                    </td>
                    <th className="w-[180px] px-3 py-2 ">
                      <div className="text-lg flex gap-2 justify-center items-center  text-orange-500">
                        {user?.averageRating?user?.averageRating:'0'} <FaStar size={26} />
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
export default AllDeliveryMen;
