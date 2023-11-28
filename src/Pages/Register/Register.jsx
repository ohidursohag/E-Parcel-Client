/* eslint-disable no-useless-escape */

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from 'lottie-react';
import animation from '../../assets/lottie/parcelDeliver.json'
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { uploadImage } from '../../Api/imageUpload';
import toast from 'react-hot-toast';
import { getAccessToken, saveUserData } from '../../Api/Auth';
import { randomphoneNumber } from '../../Components/Shared/Utilities/randomphoneNumber';
const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const { createUser, updateUserProfile, signInWithGoogle, logOut } = useAuth()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const loc = useLocation();
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const onSubmit = async (data) => {
        const toastId = toast.loading('Registering...')
        const name = data?.name;
        const email = data?.email;
        const password = data?.password;
        const userRole = data?.userRole;
        const captchaInput = data?.captchaInput;
        const phone = data?.phone;
        console.log(phone);
        if (!validateCaptcha(captchaInput)) {
            toast.error('Invalid Captcha,Please try again', { id: toastId });
            return;
        }
        try {
            //1. User Registration
            const { user } = await createUser(email, password)
            //2. upload image
            const imageUploadResponse = await uploadImage(data?.image[0])
            const image = imageUploadResponse?.data?.url;
            //3. Save username & profile photo
            await updateUserProfile({name, image,phone})
            const accessToken = await getAccessToken(user?.email)

            if (accessToken?.success) {
                // save/update user info to database
                const data = await saveUserData(user, userRole,phone)
                console.log(data);
                toast.success('Registration Successfull and Logged In', { id: toastId })
                navigate(loc?.state ? loc.state : '/', { replace: true })
            } else {
                logOut()
            }
        } catch (error) {
            toast.error(error.message, { id: toastId });
            // navigate('/login');

        }
    }

    const handleRegisterWithGoogle = async () => {
        const toastId = toast.loading('Registering ...')

        try {
            const { user } = await signInWithGoogle();
            // get AccessToken 
            const accessToken = await getAccessToken(user?.email)
            if (accessToken?.success) {
                const data = await saveUserData(user, 'user', randomphoneNumber())
                console.log(data);
                toast.success('Successfully Registered', { id: toastId })
                navigate(loc?.state ? loc.state : '/', { replace: true })

            } else {
                logOut()
            }
        } catch (error) {
            toast.error(error.message, { id: toastId });
        }
    }
    return (
        <div style={{ backgroundImage: `url(${'https://getpaidstock.com/tmp/[GetPaidStock.com]-656108bc03856.jpg'})` }} className="min-h-screen bg-cover bg-no-repeat bg-fixed bg-center flex justify-center items-center overflow-hidden">
            <div className='md:w-[80%] mx-auto min-h-[600px] bg-slate-600/70 rounded-xl backdrop-blur shadow-[10px_10px_10px_10px_rgba(0,0,0,0.25)] my-20'>
                <div className={'flex flex-col-reverse lg:flex-row w-[90%] mx-auto gap-5 justify-between items-center'}>

                    <div className='w-11/12 lg:w-3/5 xl:w-1/2  my-16'>
                        <h2 className='text-4xl font-bold text-center mb-5'>Register</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-5'>
                                <div className='w-full mb-5'>
                                    <label className="text-xl font-medium "> Name <span className='text-red-500'>*</span></label>
                                    <input type="text" {...register("name", { required: true })} placeholder="Name here" className=" h-14 w-full mt-2  rounded-[8px]  bg-white px-4  outline-none" />
                                    {errors.name?.type === 'required' && <p className='text-red-500'>Name is required</p>}
                                </div>
                                <div className='w-full mb-5'>
                                    <label className="text-xl font-medium "> Phone Number <span className='text-red-500'>*</span></label>
                                    <input type="phone" {...register("phone", { required: true })} placeholder="Phone number here" className=" h-14 w-full mt-2  rounded-[8px]  bg-white px-4  outline-none" />
                                    {errors.phone?.type === 'required' && <p className='text-red-500'>Phone number is required</p>}
                                </div>
                            </div>

                            <div className='w-full mb-5'>
                                <label className="text-xl font-medium "> Email <span className='text-red-500'>*</span></label>
                                <input type="email" {...register("email", { required: true })} placeholder="Email" className=" h-14 w-full mt-2  rounded-[8px]  bg-white px-4  outline-none" />
                                {errors.email?.type === 'required' && <p className='text-red-500'>email is required</p>}
                            </div>
                            <div className='w-full mb-5 relative'>
                                <label className="text-xl  font-medium "> Password <span className='text-red-500'>*</span></label>
                                <input type={`${showPass ? 'text' : 'password'}`} {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/ })} placeholder="Enter your password" className=" h-14 w-full mt-2  rounded-[8px]  bg-white px-4  outline-none" />
                                <div onClick={() => setShowPass(!showPass)} className='absolute top-[48px] right-5 cursor-pointer'>
                                    {

                                        !showPass
                                            ? <IoMdEye size={32} />
                                            : <IoMdEyeOff size={32} color='red' />
                                    }
                                </div>
                                {errors.password?.type === 'required' && <p className='text-red-500'>password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-500'>password must be more than 6 chracters</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-500'>password must have contain minimum 1 uppercase, 1 lowercase, 1 number and 1 spcial chracter</p>}

                            </div>

                            <div className='mb-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                                <div>
                                    <label className='block mb-2 text-xl  font-medium '>
                                        Select Role:
                                    </label>
                                    <select {...register("userRole")} className='rounded-lg py-4 pl-2 w-full outline-none'>
                                        <option value="user">User</option>
                                        <option value="deliveryMan">Delivery Man</option>
                                    </select>
                                </div>
                                <div className=''>
                                    <label className='block mb-2 text-xl  font-medium '>
                                        Select Image:
                                    </label>
                                    <input
                                        className='file:mr-4 file:py-2 file:px-4  file:border-0 file:text-base file:font-semibold file:text-[#444444] file:bg-gray-300 file:rounded-none file:normal-case text-lg  file:btn'
                                        type='file'
                                        {...register("image", { required: true })}
                                        accept='image/*'
                                    />
                                    {errors.image?.type === 'required' && <p className='text-red-500'>image is required</p>}
                                </div>
                                
                            </div>
                            <div className='w-full'>
                                <LoadCanvasTemplate />
                            </div>
                            <div className='w-full'>
                                <input type="text" {...register("captchaInput", { required: true })} placeholder='Type the Captcha above' className=" h-14  w-full mt-1 rounded-[8px] bg-white px-4 outline-none" />
                                {errors.captchaInput?.type === 'required' && <p className='text-red-500'>Captcha validation is required</p>}
                            </div>

                            <button type='submit' className='btn w-full h-[55px] rounded-md border-none text-lg bg-[rgba(209,160,84,0.5)] mt-5 text-white hover:bg-[rgba(209,160,84,0.7)]'>
                                Register
                            </button>
                        </form>

                        <div className='text-center'>
                            <p className='text-[#D1A054] mt-3'>Already registered? <Link to='/login' className='font-bold hover:text-[#ffa620]'>Go to log in</Link></p>
                        </div>
                        <div className='flex justify-between items-center gap-2 my-2'>
                            <hr className='border border-[#D1A054] flex-1' />
                            <p className='text-lg text-[#D1A054] font-bold'>Or</p>
                            <hr className='border border-[#D1A054] flex-1' />
                        </div>
                        <button onClick={handleRegisterWithGoogle} className="cursor-pointer group border-[#D1A054]   inline-flex  w-full items-center justify-center gap-2  rounded-lg border px-4 py-3 transition-colors duration-300  hover:bg-[#D1A054]  focus:outline-none">
                            <FcGoogle size={26} />
                            <span className="text-lg font-medium text-[#D1A054] group-hover:text-white">Google</span>
                        </button>
                    </div>
                    <div className='lg:w-1/2'>
                        <Lottie animationData={animation} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;