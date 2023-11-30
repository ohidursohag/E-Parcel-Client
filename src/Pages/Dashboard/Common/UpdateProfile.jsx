import { useForm } from "react-hook-form";
import Title from "../../../Components/Shared/Utilities/Title";
import useGetCurrentUser from "../../../Hooks/useGetCurrentUser";
import { getUserDatabyEmail } from "../../../Api/user";
import useAuth from "../../../Hooks/useAuth";
import { uploadImage } from "../../../Api/imageUpload";
import toast from "react-hot-toast";
import useUpdateUserData from "../../../Hooks/useUpdateUserData";


const UpdateProfile = () => {
    const {user} = useAuth()
    const { currentUser,refetch } = useGetCurrentUser();
  const  { updateUserInfo } = useUpdateUserData()
    // console.log(currentUser);
    // console.log(user?.email);
    const { register, formState: { errors }, handleSubmit,reset } = useForm({       
            defaultValues: async () => await getUserDatabyEmail(user?.email)        
    });

    const onSubmit = async (data) => {
        // console.log(data);
        let image = currentUser?.image
        // console.log(data?.image !== currentUser?.image);
        if (data?.image !== currentUser?.image) {
            const imageUploadResponse = await uploadImage(data?.image[0]);
            console.log(imageUploadResponse);
            image = imageUploadResponse?.data?.url;
            console.log(image);
        }
        // console.log(image);
        const id = currentUser?._id;
        const updatedUserData = {
            phoneNumber: data?.phoneNumber,
            image: image 
        }
        const toastId = toast.loading('Profile Updating...');
        try {
            if (data?.phoneNumber !== currentUser?.phoneNumber || image !== currentUser?.image) {               
                updateUserInfo({ id, updatedUserData })
                toast.success('Profile successfully Updated', { id: toastId });
                refetch()
                reset()
            } else {
                toast.error('Please Update A input Feild', { id: toastId })
            }            
        } catch (error) {
            toast.error(error.message, { id: toastId });
        }
     }

return(
   <div>
        <Title title="Update Profile" />
        <div className=" shadow-sm bg-orange-100 rounded-lg py-10">
            <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] mx-auto ">
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-5'>
                    <div className='w-full mb-5'>
                        <label className="text-xl font-medium "> Name </label>
                        <input  readOnly type="text" {...register("name", { required: true })} placeholder="Name here" className=" h-14 w-full mt-2  rounded-[8px]  bg-white px-4  outline-none" />    
                    </div>
                    {/* email */}
                    <div className='w-full mb-5'>
                        <label className="text-xl font-medium "> Email </label>
                        <input type="email" {...register("email", { required: true })} placeholder="Email"  readOnly className=" h-14 w-full mt-2  rounded-[8px]  bg-white px-4  outline-none" />
                        
                    </div>
                    <div className='w-full mb-5'>
                        <label className="text-xl font-medium "> User Type </label>
                        <input type="text" {...register("role", { required: true })} placeholder="Email"  readOnly className=" h-14 w-full mt-2  rounded-[8px]  bg-white px-4  outline-none" />
                        
                    </div>
                    
                </div>
                <div className='w-full mb-5'>
                    <label className="text-xl font-medium "> Phone Number</label>
                    <input type="phone" {...register("phoneNumber", )} placeholder="Phone number here" className=" h-14 w-full mt-2  rounded-[8px]  bg-white px-4  outline-none" />
                    {errors.phoneNumber?.type === 'required' && <p className='text-red-500'>Phone number is required</p>}
                </div>   
                
                {/* Profile Image */}
                <div className='flex items-center gap-10'>
                    <div>
                        <div className='block mb-2 text-xl  font-medium '>profile Image</div>
                        <div className="w-[100px]">
                            <img className="object-cover object-center" src={currentUser?.image} alt="" />
                            
                        </div>
                    </div>
                    <div>
                        <label className='block mb-2 text-xl  font-medium '>
                            Update Profile Image:
                        </label>
                        <input
                            className='file:mr-4 file:py-2 file:px-4  file:border-0 file:text-base file:font-semibold file:text-white file:rounded-lg file:bg-orange-500  file:normal-case text-lg  file:btn'
                            type='file'
                            accept='image/*'
                            {...register("image",)}
                        />
                        
                    </div>

                </div>

                <button type='submit' className='btn w-full h-[55px] rounded-md border-none text-lg bg-[rgba(209,160,84,0.5)] mt-5 text-white hover:bg-[rgba(209,160,84,0.7)]'>
                    Update Profile
                </button>
                
            </form>
        </div>
   </div>
)}
export default UpdateProfile;